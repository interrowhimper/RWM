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
  "-an(v)t- (knowing)",
  "-aduli- (wanting)",
  "-ohwel- (writing)",
  "-goliye- (reading)",
  "-ohlv- (making)",
  "-woni- (speaking)",
  "-oli- (understanding)",
  "-sga- (being afraid)",
  "-dan(v)t- (feeling)",
  "-ki- (swallowing)",
  "-hyvsde- (getting drunk)",
  "-hnigi- (starting/leaving)",
  "-deloho- (finding it out)",
  "-disiya- (leaving an object behind [long])",
  "-alitade- (jumping)",
  "-al(i)sgi- (dancing)",
  "-newat- (finding [liquid])",
  "-ad- (throwing)",
  "-adasdayvhv- (cooking a meal)",
  "-adehlgwa- (learning)",
  "-deyohv- (teaching)",
  "-de- (giving someone something [long/neutral]",
  "-dita- (drinking)",
  "-hv- (setting something down [neutral])",
  "-di- (laying something down [long]",
  
  
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

// Dictionary to store the last word generated for each canvas
  const lastWords = {
    pronounCanvas: "",
    rootCanvas: "",
    tenseCanvas: "",
    affixCanvas: "",
  };

  function drawWord(canvas, word) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(word, canvas.width / 2, canvas.height / 2);

    // Store the last generated word for the canvas
    lastWords[canvas.id] = word;
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


// Update button styles for mobile-friendly layout
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.style.width = "100%"; // Make buttons span the full width
});

// Update canvas size for mobile-friendly layout
function updateCanvasSize() {
  const canvases = document.querySelectorAll("canvas");
  canvases.forEach((canvas) => {
    const boxWidth = canvas.parentElement.clientWidth;
    canvas.width = boxWidth;
    canvas.height = boxWidth / 3; // You can adjust the aspect ratio as needed
  });
}

// Call the updateCanvasSize function when the page loads and on window resize
window.addEventListener("load", updateCanvasSize);
window.addEventListener("resize", updateCanvasSize);

