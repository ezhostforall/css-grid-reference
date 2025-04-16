function addCopyButtons() {
  document.querySelectorAll("pre").forEach((block) => {
    const button = document.createElement("button");
    button.innerText = "Copy";
    button.className = "copy-button";
    button.dataset.originalText = "Copy";
    button.setAttribute("aria-label", "Copy code to clipboard");
    button.addEventListener("click", async () => {
      const code = block.querySelector("code").innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.innerText = "Copied!";
      } catch (err) {
        button.innerText = "Failed to Copy";
      }
      setTimeout(() => (button.innerText = button.dataset.originalText), 1500);
    });
    block.appendChild(button);
  });
}
window.addEventListener("DOMContentLoaded", addCopyButtons);
