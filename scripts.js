function addCopyButtons() {
  document.querySelectorAll("pre").forEach((block) => {
    const button = document.createElement("button");
    button.innerText = "Copy";
    button.className = "copy-button";
    button.addEventListener("click", () => {
      const code = block.querySelector("code").innerText;
      navigator.clipboard.writeText(code);
      button.innerText = "Copied!";
      setTimeout(() => (button.innerText = "Copy"), 1500);
    });
    block.appendChild(button);
  });
}
window.addEventListener("DOMContentLoaded", addCopyButtons);
