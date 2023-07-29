// Root words with equal probability
const rootWords = ["adawo", "an(v)t", "aduli"];

// Categories with 5% probability each
const categories = [
  ["translocative", "cislocative"],
  ["Irrealis"],
  ["Relativizer"],
  ["Causative"],
  ["Applicative"],
  ["Reversive"],
  ["Ambulative"],
  ["Completive"],
];

function drawWord(canvas, word) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(word, canvas.width / 2, canvas.height / 2);
}

function getRandomElementFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateWord() {
  const canvas = document.getElementById("canvas");
  const rootWord = getRandomElementFromArray(rootWords);
  const categoryProbability = Math.random();

  let word = rootWord;

  // Determine if a category should be added to the word
  if (categoryProbability <= 0.05) {
    const category = getRandomElementFromArray(categories);
    word += " " + getRandomElementFromArray(category);
  }

  drawWord(canvas, word);
}

document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generateWord);
});
