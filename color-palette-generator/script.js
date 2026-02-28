const paletteEl = document.getElementById("palette");
const generateBtn = document.getElementById("generate-btn");

const PALETTE_SIZE = 5;

generateBtn.addEventListener("click", generatePalette);
paletteEl.addEventListener("click", handlePaletteClick);

generatePalette();

function generatePalette() {
  paletteEl.innerHTML = "";

  for (let i = 0; i < PALETTE_SIZE; i++) {
    const color = generateRandomColor();
    const card = createColorCard(color);
    paletteEl.appendChild(card);
  }
}

function createColorCard(color) {
  const article = document.createElement("article");
  article.className = "color-card";

  article.innerHTML = `
    <div class="color-preview" style="background:${color}" data-color="${color}"></div>
    <div class="color-meta">
      <span>${color}</span>
      <button class="copy-btn" data-color="${color}">
        Copy
      </button>
    </div>
  `;

  return article;
}

function handlePaletteClick(e) {
  const color = e.target.dataset.color;
  if (!color) return;

  copyToClipboard(color);
  showFeedback(e.target);
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .catch((err) => console.error("Clipboard error:", err));
}

function showFeedback(button) {
  const originalText = button.textContent;
  button.textContent = "Copied!";
  setTimeout(() => (button.textContent = originalText), 1200);
}

function generateRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}