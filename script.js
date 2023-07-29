// ... (previous code) ...

function generateAffix() {
  const canvas = document.getElementById("affixCanvas");
  const maxAffixes = parseInt(document.getElementById("maxAffixesInput").value);
  const selectedAffixes = Array.from(
    document.querySelectorAll(".affixCheckbox:checked")
  ).map((checkbox) => checkbox.value);

  let word = "";

  // Generate random affixes based on the maximum allowed or selected affixes
  for (let i = 0; i < maxAffixes; i++) {
    if (
      selectedAffixes.length > 0 &&
      (Math.random() <= 0.5 || i >= selectedAffixes.length)
    ) {
      const randomAffix = getRandomElementFromArray(selectedAffixes);
      word += randomAffix + " ";
    } else if (Math.random() <= 0.5) {
      const affix = getRandomElementFromArray(affixes);
      const affixWord = getRandomElementFromArray(affix);
      word += affixWord + " ";
    }
  }

  // Trim the trailing space and draw the word on the canvas
  word = word.trim();
  drawWord(canvas, word);
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

  const drillModeCheckbox = document.getElementById("drillModeCheckbox");
  drillModeCheckbox.addEventListener("change", () => {
    const affixCheckboxes = document.querySelectorAll(".affixCheckbox");
    affixCheckboxes.forEach((checkbox) => {
      checkbox.disabled = drillModeCheckbox.checked;
      if (drillModeCheckbox.checked) {
        checkbox.checked = false;
      }
    });
  });
});
