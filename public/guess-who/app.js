(function () {
  const { jsPDF } = window.jspdf;

  const A4_WIDTH_CM = 21.0;
  const A4_HEIGHT_CM = 29.7;
  const TEXT_AREA_CM = 0.7;
  const PADDING_CM = 0.15;
  const BORDER_MM = 0.9;
  const GAP_CM = 0.3;
  const MIN_MARGIN_CM = 0.5;
  const BG_TOLERANCE = 10;
  const HALO_MAX_SIZE = 30;
  const HALO_MAX_DIST = 2;
  const PILE_CARD_CM = 4.0;
  const PILE_TEXT_CM = 0.8;
  const PILE_PADDING_CM = 0.15;
  const PILE_GAP_CM = 0.3;
  const PAGE_DPI = 180;
  const PAPER_SIZES = {
    a4: {
      widthCm: 21.0,
      heightCm: 29.7,
      pdfFormatMm: [210, 297],
    },
    letter: {
      widthCm: 21.59,
      heightCm: 27.94,
      pdfFormatMm: [215.9, 279.4],
    },
  };

  const PRESETS = {
    modern: { width: 3.2, height: 3.5 },
    original: { width: 2.86, height: 5.08 },
    small: { width: 2.86, height: 4.28 },
    drawing: { width: 4.4, height: 7.62 },
    custom: { width: 3.2, height: 3.5 },
  };

  const BORDER_COLORS = {
    blue: [41, 108, 255],
    red: [220, 38, 38],
  };

  const PRESET_EXTENSIONS = ["png", "webp", "jpg", "jpeg", "gif"];
  const MIME_BY_EXTENSION = {
    png: "image/png",
    webp: "image/webp",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
  };

  const state = {
    files: [],
    isBusy: false,
    frontMode: "dark",
    paperSize: "a4",
    background: {
      mode: "color",
      color: "#000000",
      image: null,
      imageName: "",
    },
  };

  const elements = {
    dropzone: document.getElementById("dropzone"),
    fileInput: document.getElementById("file-input"),
    fileCount: document.getElementById("file-count"),
    fileList: document.getElementById("file-list"),
    paperSize: document.getElementById("paper-size"),
    sizePreset: document.getElementById("size-preset"),
    cardWidth: document.getElementById("card-width"),
    cardHeight: document.getElementById("card-height"),
    samplePreset: document.getElementById("sample-preset"),
    loadSampleButton: document.getElementById("load-sample-button"),
    deleteAllButton: document.getElementById("delete-all-button"),
    frontModeInputs: document.querySelectorAll('input[name="front-mode"]'),
    backgroundModeInputs: document.querySelectorAll('input[name="background-mode"]'),
    backgroundColorField: document.getElementById("background-color-field"),
    backgroundImageField: document.getElementById("background-image-field"),
    backgroundColor: document.getElementById("background-color"),
    backgroundColorValue: document.getElementById("background-color-value"),
    backgroundImageInput: document.getElementById("background-image-input"),
    backgroundImageName: document.getElementById("background-image-name"),
    stats: document.getElementById("stats"),
    status: document.getElementById("status"),
    generateButton: document.getElementById("generate-button"),
    generateSpinner: document.getElementById("generate-spinner"),
    generateLabel: document.querySelector(".button-label"),
  };

  function cmToPx(cm, dpi) {
    return Math.max(1, Math.round((cm / 2.54) * dpi));
  }

  function currentPaper() {
    return PAPER_SIZES[state.paperSize] || PAPER_SIZES.a4;
  }

  function computeGrid(pageCm, cardCm, gapCm, minMarginCm) {
    const available = pageCm - 2 * minMarginCm;
    if (available <= 0) {
      return 0;
    }
    return Math.floor((available + gapCm) / (cardCm + gapCm));
  }

  function formatName(name) {
    return name
      .replace(/\.[^.]+$/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function chunk(items, size) {
    const groups = [];
    for (let index = 0; index < items.length; index += size) {
      groups.push(items.slice(index, index + size));
    }
    return groups;
  }

  function svgDataUri(svg) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  function inferMimeType(url) {
    const match = String(url).match(/\.([a-z0-9]+)(?:$|\?)/i);
    if (!match) {
      return null;
    }
    return MIME_BY_EXTENSION[match[1].toLowerCase()] || null;
  }

  async function loadImageFromUrl(url) {
    if (String(url).startsWith("data:")) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error("The source image could not be loaded."));
        image.src = url;
      });
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not load image: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const inferredMime = inferMimeType(url);
    const normalizedBlob =
      blob.type && blob.type !== "application/octet-stream"
        ? blob
        : new Blob([blob], { type: inferredMime || "application/octet-stream" });
    const objectUrl = URL.createObjectURL(normalizedBlob);

    try {
      return await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error("The source image cannot be decoded."));
        image.src = objectUrl;
      });
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  }

  async function ensureFontsReady() {
    if (!document.fonts || !document.fonts.load) {
      return;
    }
    await Promise.all([
      document.fonts.load('600 16px "Geist Mono"'),
      document.fonts.load('700 16px "Geist Mono"'),
      document.fonts.ready,
    ]);
  }

  async function buildSpriteRecord(name, url) {
    const image = await loadImageFromUrl(url);
    const previewUrl = createThumbnailDataUrl(image);
    return {
      id: crypto.randomUUID(),
      sourceName: name,
      displayName: formatName(name),
      image,
      width: image.naturalWidth,
      height: image.naturalHeight,
      previewUrl,
    };
  }

  async function fileToSprite(file) {
    const url = URL.createObjectURL(file);
    try {
      return await buildSpriteRecord(file.name, url);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async function loadPresetRecord(directory, filename) {
    return buildSpriteRecord(filename, `./presets/${directory}/${filename}`);
  }

  async function loadPresetManifest(directory) {
    const response = await fetch(`./presets/${directory}/manifest.json?v=20260407b`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Could not load preset manifest for ${directory}.`);
    }

    const manifest = await response.json();
    if (!Array.isArray(manifest.files) || manifest.files.length === 0) {
      throw new Error(`Preset manifest for ${directory} does not contain any files.`);
    }

    return manifest.files.filter((filename) => {
      const match = String(filename).match(/\.([a-z0-9]+)$/i);
      return match && PRESET_EXTENSIONS.includes(match[1].toLowerCase());
    });
  }

  async function loadAssetRecord(baseNames) {
    let lastError = null;
    const candidates = Array.isArray(baseNames) ? baseNames : [baseNames];

    for (const baseName of candidates) {
      for (const extension of PRESET_EXTENSIONS) {
        const filename = `${baseName}.${extension}`;
        try {
          const image = await loadImageFromUrl(`./assets/${filename}`);
          return { image, filename };
        } catch (error) {
          lastError = error;
        }
      }
    }

    throw lastError || new Error(`Could not load asset "${candidates.join(", ")}"`);
  }

  function useBlackBackgroundBacks() {
    state.background.mode = "color";
    state.background.color = "#000000";
    state.background.image = null;
    state.background.imageName = "";
    syncBackgroundUi();
  }

  async function applySampleBackground(setName) {
    if (setName === "deltarune") {
      const asset = await loadAssetRecord("background_deltarune");
      state.background.mode = "image";
      state.background.image = asset.image;
      state.background.imageName = asset.filename;
      syncBackgroundUi();
      return;
    }

    if (setName === "undertale") {
      const asset = await loadAssetRecord(["background_undertale", "undertale"]);
      state.background.mode = "image";
      state.background.image = asset.image;
      state.background.imageName = asset.filename;
      syncBackgroundUi();
      return;
    }

    useBlackBackgroundBacks();
  }

  function createThumbnailDataUrl(image) {
    const size = 72;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.fillRect(0, 0, size, size);
    const prepared = prepareSprite(image, false);
    const inset = 6;
    const scale = Math.min((size - inset * 2) / prepared.width, (size - inset * 2) / prepared.height);
    const targetWidth = Math.max(1, Math.round(prepared.width * scale));
    const targetHeight = Math.max(1, Math.round(prepared.height * scale));
    const dx = Math.round((size - targetWidth) / 2);
    const dy = Math.round((size - targetHeight) / 2);
    ctx.drawImage(prepared, dx, dy, targetWidth, targetHeight);
    return canvas.toDataURL("image/png");
  }

  async function loadDeltarunePreset() {
    const files = await loadPresetManifest("deltarune");
    const sprites = await Promise.all(
      files.map((filename) =>
        loadPresetRecord("deltarune", filename)
      )
    );
    sprites.sort((left, right) => left.sourceName.localeCompare(right.sourceName));
    state.files = sprites;
  }

  async function loadUndertalePreset() {
    const files = await loadPresetManifest("undertale");
    const sprites = await Promise.all(
      files.map((filename) =>
        loadPresetRecord("undertale", filename)
      )
    );
    sprites.sort((left, right) => left.sourceName.localeCompare(right.sourceName));
    state.files = sprites;
  }

  function updatePresetInputs() {
    const preset = PRESETS[elements.sizePreset.value];
    const isCustom = elements.sizePreset.value === "custom";
    elements.cardWidth.value = preset.width.toFixed(2);
    elements.cardHeight.value = preset.height.toFixed(2);
    elements.cardWidth.disabled = !isCustom;
    elements.cardHeight.disabled = !isCustom;
    renderStats();
  }

  function readCardSize() {
    const width = Number.parseFloat(elements.cardWidth.value);
    const height = Number.parseFloat(elements.cardHeight.value);
    return {
      width: clamp(Number.isFinite(width) ? width : PRESETS.modern.width, 0.5, 30),
      height: clamp(Number.isFinite(height) ? height : PRESETS.modern.height, 0.5, 30),
    };
  }

  function syncBackgroundUi() {
    const usingImage = state.background.mode === "image";
    elements.backgroundModeInputs.forEach((input) => {
      input.checked = input.value === state.background.mode;
    });
    elements.backgroundColorField.classList.toggle("hidden", usingImage);
    elements.backgroundImageField.classList.toggle("hidden", !usingImage);
    elements.backgroundColorValue.textContent = state.background.color.toUpperCase();
    elements.backgroundImageName.textContent = state.background.image
      ? state.background.imageName
      : "No background image selected.";
  }

  function renderStats() {
    const { width, height } = readCardSize();
    const paper = currentPaper();
    const cols = computeGrid(paper.widthCm, width, GAP_CM, MIN_MARGIN_CM);
    const rows = computeGrid(paper.heightCm, height, GAP_CM, MIN_MARGIN_CM);
    const capacity = cols * rows;
    const templatePages =
      state.files.length === 0
        ? 1
        : Math.ceil(state.files.length / Math.max(capacity, 1)) * 2;
    const pileCols = computeGrid(paper.widthCm, PILE_CARD_CM, PILE_GAP_CM, MIN_MARGIN_CM);
    const pileRows = computeGrid(paper.heightCm, PILE_CARD_CM, PILE_GAP_CM, MIN_MARGIN_CM);
    const pileCapacity = pileCols * pileRows;

    elements.stats.innerHTML = `
      <article class="stat-card">
        <strong>${cols} × ${rows}</strong>
        <span>${capacity} template cards per A4 page</span>
      </article>
      <article class="stat-card">
        <strong>${templatePages}</strong>
        <span>template page count estimate</span>
      </article>
      <article class="stat-card">
        <strong>${pileCapacity}</strong>
        <span>pile cards per page</span>
      </article>
      <article class="stat-card">
        <strong>${width.toFixed(2)} × ${height.toFixed(2)}</strong>
        <span>selected card size in centimetres</span>
      </article>
    `;
  }

  function setStatus(message) {
    elements.status.textContent = message;
  }

  function setBusy(isBusy, label) {
    state.isBusy = isBusy;
    elements.generateButton.disabled = isBusy;
    elements.generateSpinner.classList.toggle("hidden", !isBusy);
    elements.generateSpinner.setAttribute("aria-hidden", String(!isBusy));
    elements.generateLabel.textContent = label;
  }

  function renderFileList() {
    elements.fileCount.textContent = `${state.files.length} ${state.files.length === 1 ? "file" : "files"}`;
    elements.fileList.innerHTML = "";
    elements.deleteAllButton.disabled = state.files.length === 0;

    for (const file of state.files) {
      const item = document.createElement("li");
      const thumb = document.createElement("img");
      thumb.className = "file-thumb";
      thumb.src = file.previewUrl;
      thumb.alt = "";

      const copy = document.createElement("div");
      copy.className = "file-copy";

      const nameInput = document.createElement("input");
      nameInput.className = "file-name-input";
      nameInput.type = "text";
      nameInput.value = file.displayName;
      nameInput.setAttribute("aria-label", `Display name for ${file.sourceName}`);
      nameInput.addEventListener("input", (event) => {
        updateFileName(file.id, event.target.value);
      });

      const meta = document.createElement("small");
      meta.textContent = `${file.sourceName} · ${file.width} × ${file.height}`;

      const actions = document.createElement("div");
      actions.className = "file-actions";
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "file-delete";
      removeButton.textContent = "Delete";
      removeButton.addEventListener("click", () => {
        removeFile(file.id);
      });

      copy.append(nameInput, meta);
      actions.append(removeButton);
      item.append(thumb, copy, actions);
      elements.fileList.appendChild(item);
    }

    if (state.files.length === 0) {
      const empty = document.createElement("li");
      empty.innerHTML = "<span>No images loaded yet.</span><small>Upload your own or load a sample set.</small>";
      elements.fileList.appendChild(empty);
    }

    renderStats();
  }

  function updateFileName(id, value) {
    state.files = state.files.map((file) =>
      file.id === id
        ? { ...file, displayName: value.trimStart() }
        : file
    );
  }

  function removeFile(id) {
    state.files = state.files.filter((file) => file.id !== id);
    renderFileList();
    setStatus("Image removed.");
  }

  function clearFiles() {
    state.files = [];
    renderFileList();
    setStatus("All images removed.");
  }

  async function ingestFiles(fileList) {
    const imageFiles = Array.from(fileList).filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length === 0) {
      setStatus("No supported image files were detected.");
      return;
    }

    setStatus(`Loading ${imageFiles.length} image${imageFiles.length === 1 ? "" : "s"}...`);
    const loaded = await Promise.all(imageFiles.map(fileToSprite));
    loaded.sort((left, right) => left.sourceName.localeCompare(right.sourceName));
    state.files = loaded;
    useBlackBackgroundBacks();
    renderFileList();
    setStatus("Images ready.");
  }

  function getImageData(image) {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(image, 0, 0);
    return {
      canvas,
      ctx,
      imageData: ctx.getImageData(0, 0, canvas.width, canvas.height),
    };
  }

  function backgroundColor(data, width, height) {
    const counts = new Map();

    function addPixel(index) {
      if (data[index + 3] === 0) {
        return;
      }
      const key = `${data[index]},${data[index + 1]},${data[index + 2]}`;
      counts.set(key, (counts.get(key) || 0) + 1);
    }

    for (let x = 0; x < width; x += 1) {
      addPixel(x * 4);
      addPixel(((height - 1) * width + x) * 4);
    }
    for (let y = 0; y < height; y += 1) {
      addPixel((y * width) * 4);
      addPixel((y * width + (width - 1)) * 4);
    }

    let bestKey = "255,255,255";
    let bestCount = -1;
    for (const [key, count] of counts.entries()) {
      if (count > bestCount) {
        bestKey = key;
        bestCount = count;
      }
    }
    return bestKey.split(",").map(Number);
  }

  function floodBackground(bgLike, width, height) {
    const visited = new Uint8Array(width * height);
    const queue = [];

    function enqueue(x, y) {
      if (x < 0 || x >= width || y < 0 || y >= height) {
        return;
      }
      const index = y * width + x;
      if (!bgLike[index] || visited[index]) {
        return;
      }
      visited[index] = 1;
      queue.push(index);
    }

    for (let x = 0; x < width; x += 1) {
      enqueue(x, 0);
      enqueue(x, height - 1);
    }
    for (let y = 0; y < height; y += 1) {
      enqueue(0, y);
      enqueue(width - 1, y);
    }

    for (let pointer = 0; pointer < queue.length; pointer += 1) {
      const index = queue[pointer];
      const x = index % width;
      const y = Math.floor(index / width);
      enqueue(x - 1, y);
      enqueue(x + 1, y);
      enqueue(x, y - 1);
      enqueue(x, y + 1);
    }

    return visited;
  }

  function connectedComponents(mask, width, height) {
    const labels = new Int32Array(width * height);
    const components = [];
    let label = 0;

    for (let start = 0; start < mask.length; start += 1) {
      if (!mask[start] || labels[start] !== 0) {
        continue;
      }
      label += 1;
      const pixels = [];
      const queue = [start];
      labels[start] = label;

      for (let pointer = 0; pointer < queue.length; pointer += 1) {
        const index = queue[pointer];
        pixels.push(index);
        const x = index % width;
        const y = Math.floor(index / width);
        const neighbors = [index - 1, index + 1, index - width, index + width];

        if (x === 0) {
          neighbors[0] = -1;
        }
        if (x === width - 1) {
          neighbors[1] = -1;
        }
        if (y === 0) {
          neighbors[2] = -1;
        }
        if (y === height - 1) {
          neighbors[3] = -1;
        }

        for (const neighbor of neighbors) {
          if (neighbor < 0 || !mask[neighbor] || labels[neighbor] !== 0) {
            continue;
          }
          labels[neighbor] = label;
          queue.push(neighbor);
        }
      }

      components.push(pixels);
    }

    return components;
  }

  function distanceToBackground(background, width, height) {
    const distances = new Float32Array(width * height);
    distances.fill(Number.POSITIVE_INFINITY);
    const queue = [];

    for (let index = 0; index < background.length; index += 1) {
      if (background[index]) {
        distances[index] = 0;
        queue.push(index);
      }
    }

    for (let pointer = 0; pointer < queue.length; pointer += 1) {
      const index = queue[pointer];
      const x = index % width;
      const y = Math.floor(index / width);
      const base = distances[index];
      const neighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ];

      for (const [nx, ny] of neighbors) {
        if (nx < 0 || nx >= width || ny < 0 || ny >= height) {
          continue;
        }
        const neighbor = ny * width + nx;
        if (distances[neighbor] > base + 1) {
          distances[neighbor] = base + 1;
          queue.push(neighbor);
        }
      }
    }

    return distances;
  }

  function prepareSprite(image, cleanHalo) {
    const { canvas, ctx, imageData } = getImageData(image);
    const { data, width, height } = imageData;
    const bg = backgroundColor(data, width, height);
    const bgLike = new Uint8Array(width * height);
    const nearBg = new Uint8Array(width * height);

    for (let index = 0; index < width * height; index += 1) {
      const pixel = index * 4;
      const alpha = data[pixel + 3];
      const diffR = Math.abs(data[pixel] - bg[0]);
      const diffG = Math.abs(data[pixel + 1] - bg[1]);
      const diffB = Math.abs(data[pixel + 2] - bg[2]);
      const isNear = diffR <= BG_TOLERANCE && diffG <= BG_TOLERANCE && diffB <= BG_TOLERANCE;
      nearBg[index] = isNear ? 1 : 0;
      bgLike[index] = alpha === 0 || isNear ? 1 : 0;
    }

    const background = floodBackground(bgLike, width, height);
    const foreground = new Uint8Array(width * height);

    let hasForeground = false;
    for (let index = 0; index < foreground.length; index += 1) {
      foreground[index] = background[index] ? 0 : 1;
      hasForeground = hasForeground || foreground[index] === 1;
    }

    if (!hasForeground) {
      for (let index = 0; index < foreground.length; index += 1) {
        foreground[index] = data[index * 4 + 3] > 0 ? 1 : 0;
      }
    }

    if (cleanHalo) {
      const foregroundNearBg = new Uint8Array(width * height);
      for (let index = 0; index < foreground.length; index += 1) {
        foregroundNearBg[index] = foreground[index] && nearBg[index] ? 1 : 0;
      }

      const distances = distanceToBackground(background, width, height);
      const haloComponents = connectedComponents(foregroundNearBg, width, height);
      for (const component of haloComponents) {
        if (component.length > HALO_MAX_SIZE) {
          continue;
        }
        let minDistance = Number.POSITIVE_INFINITY;
        for (const index of component) {
          minDistance = Math.min(minDistance, distances[index]);
        }
        if (minDistance <= HALO_MAX_DIST) {
          for (const index of component) {
            foreground[index] = 0;
          }
        }
      }
    }

    const components = connectedComponents(foreground, width, height);
    if (components.length > 1) {
      const largest = components.reduce((max, component) => Math.max(max, component.length), 0);
      const threshold = Math.max(50, Math.floor(largest * 0.1));
      const keep = new Uint8Array(width * height);
      for (const component of components) {
        if (component.length >= threshold) {
          for (const index of component) {
            keep[index] = 1;
          }
        }
      }
      for (let index = 0; index < foreground.length; index += 1) {
        foreground[index] = keep[index];
      }
    }

    let minX = width;
    let minY = height;
    let maxX = -1;
    let maxY = -1;

    for (let index = 0; index < foreground.length; index += 1) {
      if (!foreground[index]) {
        continue;
      }
      const x = index % width;
      const y = Math.floor(index / width);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }

    if (maxX < minX || maxY < minY) {
      return canvas;
    }

    const cropWidth = maxX - minX + 1;
    const cropHeight = maxY - minY + 1;
    const output = document.createElement("canvas");
    output.width = cropWidth;
    output.height = cropHeight;
    const outputCtx = output.getContext("2d");
    const cropped = ctx.getImageData(minX, minY, cropWidth, cropHeight);

    for (let y = 0; y < cropHeight; y += 1) {
      for (let x = 0; x < cropWidth; x += 1) {
        const sourceIndex = (y * cropWidth + x) * 4;
        const originalIndex = (minY + y) * width + (minX + x);
        if (!foreground[originalIndex]) {
          cropped.data[sourceIndex + 3] = 0;
        }
      }
    }

    outputCtx.putImageData(cropped, 0, 0);
    return output;
  }

  function drawContainedImage(ctx, source, box, fillStyle) {
    const scale = Math.min(box.width / source.width, box.height / source.height);
    const targetWidth = Math.max(1, Math.round(source.width * scale));
    const targetHeight = Math.max(1, Math.round(source.height * scale));
    const x = box.x + Math.floor((box.width - targetWidth) / 2);
    const y = box.y + Math.floor((box.height - targetHeight) / 2);

    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, targetWidth, targetHeight);
    ctx.drawImage(source, x, y, targetWidth, targetHeight);
    ctx.restore();
  }

  function drawCoverImage(ctx, image, x, y, width, height) {
    const scale = Math.max(width / image.width, height / image.height);
    const targetWidth = Math.max(1, Math.round(image.width * scale));
    const targetHeight = Math.max(1, Math.round(image.height * scale));
    const dx = x + Math.floor((width - targetWidth) / 2);
    const dy = y + Math.floor((height - targetHeight) / 2);
    ctx.drawImage(image, dx, dy, targetWidth, targetHeight);
  }

  function fitFontSize(ctx, text, maxWidth, maxHeight, family, weight) {
    for (let size = Math.max(8, Math.floor(maxHeight)); size >= 6; size -= 1) {
      ctx.font = `${weight} ${size}px ${family}`;
      const metrics = ctx.measureText(text);
      const height =
        (metrics.actualBoundingBoxAscent || size * 0.8) +
        (metrics.actualBoundingBoxDescent || size * 0.2);
      if (metrics.width <= maxWidth && height <= maxHeight) {
        return { size, height };
      }
    }
    return { size: 6, height: 6 };
  }

  function createPageCanvas(dpi) {
    const paper = currentPaper();
    const canvas = document.createElement("canvas");
    canvas.width = cmToPx(paper.widthCm, dpi);
    canvas.height = cmToPx(paper.heightCm, dpi);
    return canvas;
  }

  function drawPageLabel(ctx, label, dpi) {
    const pageWidth = ctx.canvas.width;
    const top = cmToPx(0.55, dpi);
    ctx.save();
    ctx.textAlign = "center";
    ctx.fillStyle = "#111111";
    ctx.font = `700 ${Math.max(18, Math.round(dpi * 0.12))}px "Geist Mono", monospace`;
    ctx.fillText(label, pageWidth / 2, top);
    ctx.restore();
  }

  function frontStyle() {
    if (state.frontMode === "light") {
      return {
        background: "#ffffff",
        text: "#000000",
        stroke: "#000000",
        outline: "#1f2937",
      };
    }
    return {
      background: "#000000",
      text: "#ffffff",
      stroke: "#000000",
      outline: null,
    };
  }

  function renderTemplatePage(cards, settings, dpi, label) {
    const canvas = createPageCanvas(dpi);
    const ctx = canvas.getContext("2d");
    const pageWidth = canvas.width;
    const pageHeight = canvas.height;
    const cardWidth = cmToPx(settings.width, dpi);
    const cardHeight = cmToPx(settings.height, dpi);
    const gap = cmToPx(GAP_CM, dpi);
    const padding = cmToPx(PADDING_CM, dpi);
    const textArea = cmToPx(TEXT_AREA_CM, dpi);
    const borderWidth = Math.max(2, Math.round((dpi * BORDER_MM) / 25.4));
    const paper = currentPaper();
    const cols = computeGrid(paper.widthCm, settings.width, GAP_CM, MIN_MARGIN_CM);
    const rows = computeGrid(paper.heightCm, settings.height, GAP_CM, MIN_MARGIN_CM);
    const totalWidth = cols * cardWidth + (cols - 1) * gap;
    const totalHeight = rows * cardHeight + (rows - 1) * gap;
    const marginX = (pageWidth - totalWidth) / 2;
    const titleOffset = cmToPx(0.9, dpi);
    const marginY = titleOffset + (pageHeight - titleOffset - totalHeight) / 2;
    const front = frontStyle();

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, pageWidth, pageHeight);
    drawPageLabel(ctx, label, dpi);

    cards.forEach((card, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      const x = Math.round(marginX + col * (cardWidth + gap));
      const y = Math.round(marginY + row * (cardHeight + gap));
      const text = card.displayName || formatName(card.sourceName || card.name);
      const prepared = prepareSprite(card.image, false);

      ctx.fillStyle = front.background;
      ctx.strokeStyle = `rgb(${card.border.join(",")})`;
      ctx.lineWidth = borderWidth;
      ctx.fillRect(x, y, cardWidth, cardHeight);
      ctx.strokeRect(x, y, cardWidth, cardHeight);

      drawContainedImage(
        ctx,
        prepared,
        {
          x: x + padding,
          y: y + padding,
          width: cardWidth - padding * 2,
          height: cardHeight - textArea - padding * 2,
        },
        front.background
      );

      const textBox = {
        x: x + padding,
        y: y + cardHeight - textArea - padding,
        width: cardWidth - padding * 2,
        height: textArea,
      };
      const { size, height } = fitFontSize(
        ctx,
        text,
        textBox.width,
        textBox.height,
        '"Geist Mono", monospace',
        600
      );
      ctx.font = `600 ${size}px "Geist Mono", monospace`;
      ctx.fillStyle = front.text;
      const textWidth = ctx.measureText(text).width;
      const textX = textBox.x + (textBox.width - textWidth) / 2;
      const textY = textBox.y + (textBox.height + height * 0.72) / 2;
      ctx.fillText(text, textX, textY);
    });

    return canvas;
  }

  function fillCardBack(backCtx, x, y, width, height) {
    if (state.background.mode === "image" && state.background.image) {
      backCtx.save();
      backCtx.beginPath();
      backCtx.rect(x, y, width, height);
      backCtx.clip();
      drawCoverImage(backCtx, state.background.image, x, y, width, height);
      backCtx.restore();
      return;
    }
    backCtx.fillStyle = state.background.color;
    backCtx.fillRect(x, y, width, height);
  }

  async function renderPilePages(files, dpi) {
    const paper = currentPaper();
    const cols = computeGrid(paper.widthCm, PILE_CARD_CM, PILE_GAP_CM, MIN_MARGIN_CM);
    const rows = computeGrid(paper.heightCm, PILE_CARD_CM, PILE_GAP_CM, MIN_MARGIN_CM);
    const capacity = cols * rows;
    const cardWidth = cmToPx(PILE_CARD_CM, dpi);
    const cardHeight = cmToPx(PILE_CARD_CM, dpi);
    const gap = cmToPx(PILE_GAP_CM, dpi);
    const padding = cmToPx(PILE_PADDING_CM, dpi);
    const textArea = cmToPx(PILE_TEXT_CM, dpi);
    const groups = chunk(files, capacity);
    const outputPages = [];

    for (const group of groups) {
      const front = createPageCanvas(dpi);
      const back = createPageCanvas(dpi);
      const frontCtx = front.getContext("2d");
      const backCtx = back.getContext("2d");
      const totalWidth = cols * cardWidth + (cols - 1) * gap;
      const totalHeight = rows * cardHeight + (rows - 1) * gap;
      const marginX = (front.width - totalWidth) / 2;
      const titleOffset = cmToPx(0.9, dpi);
      const marginY = titleOffset + (front.height - titleOffset - totalHeight) / 2;
      const frontStyleMode = frontStyle();

      frontCtx.fillStyle = "#ffffff";
      frontCtx.fillRect(0, 0, front.width, front.height);
      backCtx.fillStyle = "#ffffff";
      backCtx.fillRect(0, 0, back.width, back.height);
      drawPageLabel(frontCtx, "Selection card fronts", dpi);
      drawPageLabel(backCtx, "Selection card backs", dpi);

      group.forEach((file, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = Math.round(marginX + col * (cardWidth + gap));
        const y = Math.round(marginY + row * (cardHeight + gap));
        const prepared = prepareSprite(file.image, true);
        const text = file.displayName || formatName(file.sourceName || file.name);

        frontCtx.fillStyle = frontStyleMode.background;
        frontCtx.fillRect(x, y, cardWidth, cardHeight);
        if (frontStyleMode.outline) {
          frontCtx.strokeStyle = frontStyleMode.outline;
          frontCtx.lineWidth = Math.max(2, Math.round(dpi * 0.03));
          frontCtx.strokeRect(x, y, cardWidth, cardHeight);
        }
        fillCardBack(backCtx, x, y, cardWidth, cardHeight);

        drawContainedImage(
          frontCtx,
          prepared,
          {
            x: x + padding,
            y: y + padding,
            width: cardWidth - padding * 2,
            height: cardHeight - textArea - padding * 2,
          },
          frontStyleMode.background
        );

        const textBox = {
          x: x + padding,
          y: y + cardHeight - textArea - padding,
          width: cardWidth - padding * 2,
          height: textArea,
        };
        const { size, height } = fitFontSize(
          frontCtx,
          text,
          textBox.width,
          textBox.height,
          '"Geist Mono", monospace',
          700
        );
        const textY = textBox.y + (textBox.height + height * 0.72) / 2;
        frontCtx.font = `700 ${size}px "Geist Mono", monospace`;
        frontCtx.textAlign = "center";
        frontCtx.fillStyle = frontStyleMode.text;
        frontCtx.lineWidth = Math.max(1, Math.round(size * 0.08));
        frontCtx.strokeStyle = frontStyleMode.stroke;
        frontCtx.strokeText(text, textBox.x + textBox.width / 2, textY);
        frontCtx.fillText(text, textBox.x + textBox.width / 2, textY);
      });

      outputPages.push(front, back);
    }

    return outputPages;
  }

  function addCanvasPagesToPdf(pdf, canvases, hasPages = false) {
    canvases.forEach((canvas, index) => {
      if (index > 0 || hasPages) {
        pdf.addPage(currentPaper().pdfFormatMm, "portrait");
      }
      const [widthMm, heightMm] = currentPaper().pdfFormatMm;
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, widthMm, heightMm, undefined, "FAST");
      hasPages = true;
    });
    return hasPages;
  }

  function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function generatePdfs() {
    if (state.files.length === 0) {
      setStatus("Add at least one image before generating PDFs.");
      return;
    }

    if (state.background.mode === "image" && !state.background.image) {
      setStatus("Choose a card-back image or switch back to a solid colour.");
      return;
    }

    const settings = readCardSize();
    const paper = currentPaper();
    const cols = computeGrid(paper.widthCm, settings.width, GAP_CM, MIN_MARGIN_CM);
    const rows = computeGrid(paper.heightCm, settings.height, GAP_CM, MIN_MARGIN_CM);
    const capacity = cols * rows;
    if (capacity === 0) {
      setStatus("The selected card size does not fit on an A4 page.");
      return;
    }

    setBusy(true, "Generating");
    setStatus("Rendering printable pages...");
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    try {
      await ensureFontsReady();
      const bluePages = chunk(
        state.files.map((file) => ({ ...file, border: BORDER_COLORS.blue })),
        capacity
      ).map((group) => renderTemplatePage(group, settings, PAGE_DPI, "Blue player"));
      const redPages = chunk(
        state.files.map((file) => ({ ...file, border: BORDER_COLORS.red })),
        capacity
      ).map((group) => renderTemplatePage(group, settings, PAGE_DPI, "Red player"));

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: paper.pdfFormatMm,
        compress: true,
      });
      let hasPages = false;
      hasPages = addCanvasPagesToPdf(pdf, bluePages, hasPages);
      hasPages = addCanvasPagesToPdf(pdf, redPages, hasPages);

      setStatus("Rendering pile card pages...");
      const pilePages = await renderPilePages(state.files, PAGE_DPI);
      addCanvasPagesToPdf(pdf, pilePages, hasPages);

      triggerDownload(pdf.output("blob"), "guess-who-printables.pdf");
      setStatus("Finished. Your PDF has been downloaded.");
    } catch (error) {
      console.error(error);
      setStatus(`Generation failed: ${error.message}`);
    } finally {
      setBusy(false, "Generate PDF");
    }
  }

  function bindDropzone() {
    const activeClass = "is-active";

    elements.dropzone.addEventListener("click", () => {
      elements.fileInput.click();
    });

    elements.dropzone.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        elements.fileInput.click();
      }
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      elements.dropzone.addEventListener(eventName, (event) => {
        event.preventDefault();
        elements.dropzone.classList.add(activeClass);
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      elements.dropzone.addEventListener(eventName, (event) => {
        event.preventDefault();
        elements.dropzone.classList.remove(activeClass);
      });
    });

    elements.dropzone.addEventListener("drop", (event) => {
      ingestFiles(event.dataTransfer.files);
    });

    elements.fileInput.addEventListener("change", (event) => {
      ingestFiles(event.target.files);
      event.target.value = "";
    });
  }

  function bindBackgroundControls() {
    elements.frontModeInputs.forEach((input) => {
      input.addEventListener("change", () => {
        state.frontMode = input.value;
      });
    });

    elements.backgroundModeInputs.forEach((input) => {
      input.addEventListener("change", () => {
        state.background.mode = input.value;
        syncBackgroundUi();
      });
    });

    elements.backgroundColor.addEventListener("input", (event) => {
      state.background.color = event.target.value;
      syncBackgroundUi();
    });

    elements.backgroundImageInput.addEventListener("change", async (event) => {
      const [file] = Array.from(event.target.files || []);
      if (!file) {
        return;
      }
      setStatus("Loading background image...");
      state.background.image = await fileToSprite(file).then((sprite) => sprite.image);
      state.background.imageName = file.name;
      syncBackgroundUi();
      setStatus("Background image ready.");
      event.target.value = "";
    });
  }

  async function loadSamplePreset() {
    elements.loadSampleButton.disabled = true;
    setStatus("Loading sample images...");

    try {
      const preset = elements.samplePreset.value;
      if (preset === "deltarune") {
        await loadDeltarunePreset();
      } else {
        await loadUndertalePreset();
      }
      await applySampleBackground(preset);
      renderFileList();
      setStatus("Sample set loaded.");
    } catch (error) {
      console.error(error);
      setStatus(`Could not load sample set: ${error.message}`);
    } finally {
      elements.loadSampleButton.disabled = false;
    }
  }

  function init() {
    bindDropzone();
    bindBackgroundControls();
    elements.paperSize.addEventListener("change", (event) => {
      state.paperSize = event.target.value;
      renderStats();
    });
    elements.sizePreset.addEventListener("change", updatePresetInputs);
    elements.cardWidth.addEventListener("input", renderStats);
    elements.cardHeight.addEventListener("input", renderStats);
    elements.generateButton.addEventListener("click", generatePdfs);
    elements.loadSampleButton.addEventListener("click", loadSamplePreset);
    elements.deleteAllButton.addEventListener("click", clearFiles);
    elements.paperSize.value = state.paperSize;
    updatePresetInputs();
    syncBackgroundUi();
    renderFileList();
    setBusy(false, "Generate PDF");
    setStatus("Ready.");
  }

  init();
})();
