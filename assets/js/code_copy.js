function copyCode(button) {
  const codeContainer = button.parentElement;
  const codeBlock = codeContainer.querySelector("pre code");
  const text = codeBlock.textContent;

  navigator.clipboard
    .writeText(text)
    .then(function () {
      const originalText = button.innerHTML;
      button.innerHTML = '<span class="copy-icon"></span>Copied!';
      button.classList.add("copied");

      setTimeout(function () {
        button.innerHTML = originalText;
        button.classList.remove("copied");
      }, 2000);
    })
    .catch(function (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      button.innerHTML = '<span class="copy-icon"></span>Copied!';
      button.classList.add("copied");
      setTimeout(function () {
        button.innerHTML = '<span class="copy-icon"></span>Copy';
        button.classList.remove("copied");
      }, 2000);
    });
}

// Auto-add copy buttons to code blocks
document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach(function (pre) {
    const container = document.createElement("div");
    container.className = "code-container";

    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.innerHTML = '<span class="copy-icon"></span>Copy';
    copyButton.onclick = function () {
      copyCode(this);
    };

    pre.parentNode.insertBefore(container, pre);
    container.appendChild(copyButton);
    container.appendChild(pre);
  });
});
