// Writing to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

// Reading from clipboard
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log("Pasted content: ", text);
  } catch (err) {
    console.error("Failed to read clipboard contents: ", err);
  }
}

// Usage
copyToClipboard("Hello, Clipboard API!");
pasteFromClipboard();