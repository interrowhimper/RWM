const verbSets = {
  "glottal": [
    "go²hwe²³li³Ɂa (writing)",
    "go¹we²³lị³Ɂa",
    "u¹wo²hwe²³la³²nv²³Ɂi",
    "go²hwe²³li³²sgo³Ɂi",
    "ho²hwe²lv¹ga",
    "ụ²wo²hwe²³lo³²di",
  ],
  "sg": [
    "gv²tṿ³sga (putting it into a fire)",
    "gv¹dṿ³sga",
    "u¹wv²tạ³nv³Ɂi",
    "gv²tṿ³sgọ³Ɂi",
    "hv²tv¹ga",
    "ụ²wv²tdi",
  ],
  // Add more sets here with their respective aspects
};

const verbCanvas = document.getElementById("verbCanvas");
const canvasContext = verbCanvas.getContext("2d"); // Get the canvas 2D context
const randomButton = document.getElementById("randomButton");
const inputAspect = document.getElementById("inputAspect");
const revealButton = document.getElementById("revealButton");
const aspectResult = document.getElementById("aspectResult");

let currentVerb = null;
let currentAspect = null;

function getRandomWord(verbs) {
  return verbs[Math.floor(Math.random() * verbs.length)];
}

function drawWord(text) {
  // Clear the previous text on the canvas
  canvasContext.clearRect(0, 0, verbCanvas.width, verbCanvas.height);
  
  // Draw the new text on the canvas
  canvasContext.font = "20px Arial"; // Set the font size and family
  canvasContext.fillStyle = "black"; // Set the text color
  canvasContext.fillText(text, 10, 50); // You can change the position as needed
}

randomButton.addEventListener("click", function () {
  const randomSet = getRandomWord(Object.keys(verbSets));
  currentVerb = getRandomWord(verbSets[randomSet]);
  currentAspect = randomSet;
  drawWord(currentVerb); // Draw the randomly chosen word on the canvas
  aspectResult.textContent = ''; // Clear previous result when generating a new word
});

revealButton.addEventListener("click", function () {
  const userInput = inputAspect.value.trim();
  
  aspectResult.textContent = `"${currentAspect}"`;
});
