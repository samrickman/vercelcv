"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";
import { Interactivity } from "@tsparticles/engine";

function updateParticlesConfig(newValues) {
    
    window.dispatchEvent(new CustomEvent("updateParticles", { detail: newValues }));
}

export default function CVHackerTerminal() {
    const terminalRef = useRef(null);
    const [term, setTerm] = useState(null);
    let inputBuffer = "";
    let midCommand = false; // flag so we don't send keys if in the middle of a command like cat

    // Arrow key escape sequences
    const UpArrow = "\u001b[A";
    const DownArrow = "\u001b[B";
    const backspace = "\u007F";

    // History
    const commandHistory = [];
    let historyIndex = -1;

    // Show prompt
    const prompt = (terminal, promptChar = "$") => {
        terminal.writeln("");
        terminal.write(`${promptChar} `);
    };

    const cat = (terminal, filename = "cv.txt") => {
        fetch(`/terminal/${filename}`)
            .then((response) => {
                if (!response.ok) throw new Error("File not found");
                return response.text();
            })
            .then((text) => {
                midCommand = true;
                const lines = text.split("\n");
                let index = 0;
                const pageSize = 12; // About the size of the xterm terminal

                // If the file is short, just print it and return
                if (lines.length <= pageSize) {
                    for (let i = 0; i < lines.length; i++) {
                        terminal.writeln(lines[i]);
                    }
                    midCommand = false;
                    return;
                }

                const printNextPage = () => {
                    // Clear the "-- More --" prompt before continuing
                    terminal.write("\x1B[F\x1B[2K");

                    for (let i = 0; i < pageSize && index < lines.length; i++, index++) {
                        terminal.writeln(lines[index]);
                    }

                    if (index < lines.length) {
                        terminal.writeln("\x1B[1m-- More (press space or Enter to continue, q to quit) --\x1B[0m");
                        waitingForMore = true;
                    } else {
                        // At the end of the file, remove listener and restore prompt
                        terminal.writeln("\n(End of file)");
                        keyListener.dispose();
                        midCommand = false; // we can send keys to main terminal again
                    }
                };

                let waitingForMore = false;

                // Initial print
                printNextPage();

                // Key handler for pagination
                const keyHandler = (event) => {
                    if (!waitingForMore) return;
                    if (event.key === " " || event.key === "\r") {
                        // Space or Enter → Show next page
                        printNextPage();
                    } else if (event.key === "q") {
                        // 'q' → Exit
                        terminal.writeln("\x1B[2K\r(Exited)");
                        waitingForMore = false;
                        keyListener.dispose();
                        midCommand = false; // we can send keys again
                    }
                };

                // Attach key listener and store reference
                const keyListener = terminal.onKey(keyHandler);
            })
            .catch((error) => terminal.writeln(`Error: ${error.message}`));
    };

    useEffect(() => {
        if (!terminalRef.current) return;

        const terminal = new Terminal({
            cursorBlink: true,
            theme: { background: "#0e1117", foreground: "#00ff00" },
            cols: 94
        });

        terminal.open(terminalRef.current);
        setTerm(terminal);

        // Display intro text
        terminal.writeln("Welcome to Hacker Mode!");
        terminal.writeln("Type `help` for commands.");
        prompt(terminal);

        // Handle user input
        terminal.onData((data) => handleInput(terminal, data));

        return () => terminal.dispose();
    }, []);

    const handleInput = (terminal, data) => {
        if (midCommand) {
            // If we're in the middle of a paginated command (like 'cat'), ignore normal input
            return;
        }

        // Handle arrow keys (history)
        if (data === UpArrow) {
            // Move up in history
            if (commandHistory.length > 0) {
                // If not currently in history, jump to last
                if (historyIndex === -1) {
                    historyIndex = commandHistory.length - 1;
                }
                // Otherwise, move back one (if possible)
                else if (historyIndex > 0) {
                    historyIndex--;
                }
                // Clear current line
                terminal.write("\r\x1B[K");
                // Rewrite prompt + command from history
                terminal.write("$ " + commandHistory[historyIndex]);
                // Update inputBuffer
                inputBuffer = commandHistory[historyIndex];
            }
            return; // Don't process as normal input
        }

        if (data === DownArrow) {
            // Move down in history
            if (historyIndex >= 0) {
                historyIndex++;
                // If we go past the last command, reset to -1 (no history)
                if (historyIndex === commandHistory.length) {
                    historyIndex = -1;
                    // Clear line and show empty prompt
                    terminal.write("\r\x1B[K");
                    terminal.write("$ ");
                    inputBuffer = "";
                } else {
                    // Clear line
                    terminal.write("\r\x1B[K");
                    // Show next command
                    terminal.write("$ " + commandHistory[historyIndex]);
                    inputBuffer = commandHistory[historyIndex];
                }
            }
            return; // Don't process as normal input
        }

        if (data === '\u0003') { // Ctrl+C
            // Optional: display ^C
            terminal.write('^C\r\n');
            // Clear the terminal screen
            terminal.clear();
            // Reset your input buffer
            inputBuffer = "";
            // Show a fresh prompt
            prompt(terminal);
            return;
        }
        // Enter key
        if (data === "\r") {
            const command = inputBuffer.trim();
            // Only add to history if there's an actual command
            if (command) {
                commandHistory.push(command);
            }
            terminal.write("\r\n");
            processCommand(terminal);
            historyIndex = -1; // Reset history navigation
            return;
        }

        // Handle backspace
        if (data === backspace) {
            // If there's something in the buffer, remove last character
            if (inputBuffer.length > 0) {
                inputBuffer = inputBuffer.slice(0, -1);
                // Move cursor left, clear the char, move cursor left again
                terminal.write("\b \b");
            }
            return;
        }

        // Otherwise, it's a normal character
        inputBuffer += data;
        terminal.write(data);
    };

    const processCommand = (terminal) => {
        const command = inputBuffer.trim();
        inputBuffer = ""; // Reset for next command

        switch (command) {
            case "aa":
                
            case "":
                // Just an empty Enter. Show prompt again.
                prompt(terminal);
                return;
            case "help":
                terminal.writeln("Available commands:");
                terminal.writeln("  ls - List files");
                terminal.writeln("  cat <file> - Print contents of file.");
                terminal.writeln("  particles - control particles background");
                terminal.writeln("  exit - Close terminal");
                break;
            case "ls":
                terminal.writeln("cv.txt   about.txt   cat.txt");
                break;
            case "cat":
                terminal.writeln("Usage: cat <file>");
                terminal.writeln("e.g. `cat cv.txt`");
                break;
            case "exit":
                terminal.writeln("Exiting... (not really)");
                break;
            case "particles":
                terminal.writeln("Usage: particles <option> <value>");
                terminal.writeln("Commands:");
                terminal.writeln("  particles num <number>  - Update number of particles. Default is 100.");
                terminal.writeln("      Note: Values > ~2000 may be slow to render.");
                terminal.writeln("  particles opacity <number>  - Update particle opacity. Default is 0.5. Range: 0.0 - 1.0.");
                terminal.writeln("  particles speed <number>  - Update particle speed. Default is 0.7.");
                terminal.writeln("      Note: Values > 25 may cause nausea.");
                terminal.writeln("  particles color <option> - Update colors. Default is medium.");
                terminal.writeln("      Options: none, medium, high.");
                terminal.writeln("  particles hover <option> - Update hover action. Default is repulse.");
                terminal.writeln("      Options: repulse, slow, grab, attract.");
                break;
            default:
                // cat
                if (command.startsWith("cat ")) {
                    const filename = command.slice(4).trim();
                    cat(terminal, filename);
                }
                // particles
                else if (command.startsWith("particles num")) {
                    const args = command.split(" ");
                    if (args.length !== 3 || isNaN(args[2])) {
                        terminal.writeln("Usage: particles num <number>");
                        break;
                    }
                    const numParticles = parseInt(args[2], 10);
                    updateParticlesConfig({ particles: { number: { value: numParticles } } });
                    terminal.writeln(`\rUpdated number of particles to ${numParticles}`);
                }
                else if (command.startsWith("particles opacity")) {
                    const args = command.split(" ");
                    if (args.length !== 3 || isNaN(args[2])) {
                        terminal.writeln("Usage: particles opacity <number>");
                        break;
                    }
                    let opacity = parseFloat(args[2], 10);
                    if (opacity < 0 || opacity > 1) {
                        // equivalent to clamp
                        opacity = Math.min(Math.max(opacity, 0), 1);
                        terminal.writeln(`\rOpacity must be a number between 0 and 1.`);
                    }
                    updateParticlesConfig({ particles: { opacity: { value: { max: opacity } } } });
                    updateParticlesConfig({ particles: { opacity: { value: { min: opacity } } } });
                    updateParticlesConfig({ particles: { links: { opacity: opacity } } });
                    terminal.writeln(`\rUpdated particles opacity to ${opacity}`);
                }
                else if (command.startsWith("particles speed")) {
                    const args = command.split(" ");
                    if (args.length !== 3 || isNaN(args[2])) {
                        terminal.writeln("Usage: particles speed <number>");
                        break;
                    }
                    const speed = parseFloat(args[2], 10);
                    updateParticlesConfig({ particles: { move: { speed: speed } } });
                    terminal.writeln(`\rUpdated particles speed to ${speed}`);
                } else if (command.startsWith("particles color")) {
                    const args = command.split(" ");
                    const colorSetting = args[2];
                    if (args.length !== 3 || !["none", "medium", "high"].includes(colorSetting)) {
                        terminal.writeln("  particles color <option> - Update colors. Default is medium.");
                        terminal.writeln("      Options: none, medium, high.");
                        terminal.writeln("  e.g. `particles color none`");
                        break;
                    }
                    switch (colorSetting) {
                        case "none":
                            updateParticlesConfig({ particles: { color: { value: "#505050" } } });
                            updateParticlesConfig({ particles: { color: { animation: { s: { enable: false } } } } });
                            updateParticlesConfig({ particles: { color: { animation: { h: { enable: false } } } } });

                            break;
                        case "medium":
                            updateParticlesConfig({ particles: { color: { value: "#afafaf" } } });
                            updateParticlesConfig({ particles: { color: { animation: { s: { enable: true } } } } });
                            updateParticlesConfig({ particles: { color: { animation: { h: { speed: 50 } } } } });
                            break;
                        case "high":
                            updateParticlesConfig({ particles: { color: { value: "#ff0000" } } });
                            updateParticlesConfig({ particles: { color: { animation: { s: { enable: false } } } } });
                            updateParticlesConfig({ particles: { color: { animation: { h: { speed: 200 } } } } });

                            break;
                    }

                    terminal.writeln(`\rUpdated particles color to ${colorSetting}`);
                } else if (command.startsWith("particles hover")) {
                    const args = command.split(" ");
                    const hoverSetting = args[2];
                    if (args.length !== 3 || !["repulse", "slow", "grab", "attract"].includes(hoverSetting)) {
                        terminal.writeln("  particles hover <option> - Update colors. Default is repulse.");
                        terminal.writeln("      Options: repulse, slow, grab, attract.");
                        terminal.writeln("  e.g. `particles hover grab`");
                        break;
                    }
                    updateParticlesConfig({ interactivity: { events: { onHover: { mode: hoverSetting } } } });
                    terminal.writeln(`\rUpdated particles hover mode to ${hoverSetting}`);
                }
                else {
                    terminal.writeln(`Command not found: ${command}`);
                }
                break;
        }

        // Show prompt again
        prompt(terminal);
    };

    return <div ref={terminalRef} className="h-[400px] w-full bg-black z-[10]" />;
}
