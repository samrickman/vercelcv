function updateParticlesConfig(newValues) {

    window.dispatchEvent(new CustomEvent("updateParticles", { detail: newValues }));
}