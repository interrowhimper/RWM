// Pronouns with equal probability
const pronouns = [
  "I",
  "You (singular)",
  "You two",
  "You 3+",
  "We 2 (inclusive)",
  "We 2 (exclusive)",
  "We 3+ (inclusive)",
  "We 3+ (exclusive)",
  "She/he/it",
  "They (2+)",
];

// Root words with equal probability
const rootWords = ["adawo", "an(v)t", "aduli"];

// Categories with 5% probability each
const affixes = [
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

function generatePronoun() {
  const canvas = document.getElementById("pronounCanvas");
  const pronoun = getRandomElementFromArray(pronouns);
  drawWord(canvas, pronoun);
}

function generateRootWord() {
  const canvas = document.getElementById("rootCanvas");
  const rootWord = getRandomElementFromArray(rootWords);
  drawWord(canvas, rootWord);
}

function generateAffix() {
  const canvas = document.getElementById("affixCanvas");
  const affix = getRandomElementFromArray(affixes);
  const affixWord = getRandomElementFromArray(affix);
  drawWord(canvas, affixWord);
}

document.addEventListener("DOMContentLoaded", () => {
  const generatePronounButton = document.getElementById("generatePronounButton");
  generatePronounButton.addEventListener("click", generatePronoun);

  const generateRootButton = document.getElementById("generateRootButton");
  generateRootButton.addEventListener("click", generateRootWord);

  const generateAffixButton = document.getElementById("generateAffixButton");
  generateAffixButton.addEventListener("click", generateAffix);
});
