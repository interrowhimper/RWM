// Pronouns with equal probability
const pronouns = [
  "I",
  "You (singular)",
  "You two",
  "You 3+",
  "We two (inclusive)",
  "We 3+ (inclusive)",
  "We two (exclusive)",
  "We 3+ (exclusive)",
  "He/she/it",
  "They",
];

// Root words with equal probability
const rootWords = [
  "-ad- (throwing)",
  "-aduli- (wanting)",
  "-adasdayvhv- (cooking a meal)",
  "-ade- (giving someone something [long/neutral]",
  "-adehlgwa- (learning)",
  "-al(i)sgi- (dancing)",
  "-alitade- (jumping)",
  "-dan(v)t- (feeling)",
  "-de- (giving someone something [long/neutral]",
  "-deyohv- (teaching)",
  "-deloho- (finding it out)",
  "-dita- (drinking)",
  "-disiya- (leaving an object behind [long])",
  "-goliye- (reading)",
  "-hnigi- (starting/leaving)",
  "-hv- (setting something down)",
  "-hyvsde- (getting drunk)",
  "-ki- (swallowing)",
  "-newat- (finding [liquid])",
  "-ohlv- (making)",
  "-ohwel- (writing)",
  "-oli- (understanding)",
  "-sga- (being afraid)",
  "-woni- (speaking)",
];

// Tense options with equal probability
const tenseOptions = [
  "Present",
  "Completive Past (Experienced)",
  "Completive Past (Reported)",
  "Incompletive Past (Experienced)",
  "Incompletive Past (Reported)",
  "Immediate",
  "Future",
  "Future Progressive",
  "Infinitive",
];

// Affix options with equal probability
const affixes = [
  "causative",
  "applicative",
  "reversive",
  "irrealis",
  "translocative",
  "cislocative",
  "terminative",
  "pre-incipient",
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

function generateTense() {
  const canvas = document.getElementById("tenseCanvas");
  const tense = getRandomElementFromArray(tenseOptions);
  drawWord(canvas, tense);
}

function generateAffix() {
  const canvas = document.getElementById("affixCanvas");
  const addAffixCheckbox = document.getElementById("addAffixCheckbox");
  let affix = "";

  if (addAffixCheckbox.checked) {
    affix = getRandomElementFromArray(affixes);
  }

  drawWord(canvas, affix);
}

function generateRandomWord() {
  generatePronoun();
  generateRootWord();
  generateTense();
  generateAffix();
}

document.addEventListener("DOMContentLoaded", () => {
  const generatePronounButton = document.getElementById("generatePronounButton");
  generatePronounButton.addEventListener("click", generatePronoun);

  const generateRootButton = document.getElementById("generateRootButton");
  generateRootButton.addEventListener("click", generateRootWord);

  const generateTenseButton = document.getElementById("generateTenseButton");
  generateTenseButton.addEventListener("click", generateTense);

  const generateAffixButton = document.getElementById("generateAffixButton");
  generateAffixButton.addEventListener("click", generateAffix);

  const generateRandomButton = document.getElementById("generateRandomButton");
  generateRandomButton.addEventListener("click", generateRandomWord);
});
