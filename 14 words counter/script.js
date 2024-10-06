
const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordCount");
const charCountDisplay = document.getElementById("charCount");
const alphabetCountDisplay = document.getElementById("alphabetCount");
const numberCountDisplay = document.getElementById("numberCount");
const resetButton = document.getElementById("resetButton");


function countWords(text) {
  let words = text.trim().split(/\s+/).filter(function(word) {
    return word.length > 0;
  });
  return words.length;
}

function countCharacters(text) {
  return text.length;
}


function countAlphabets(text) {
  let alphabets = text.match(/[a-zA-Z]/g);
  return alphabets ? alphabets.length : 0;
}


function countNumbers(text) {

  let numbers = text.match(/\d/g);
  return numbers ? numbers.length : 0;
}

textInput.addEventListener("input", function() {
  let text = textInput.value;
  let wordCount = countWords(text);
  let charCount = countCharacters(text);
  let alphabetCount = countAlphabets(text);
  let numberCount = countNumbers(text);

  wordCountDisplay.textContent = wordCount;
  charCountDisplay.textContent = charCount;
  alphabetCountDisplay.textContent = alphabetCount;
  numberCountDisplay.textContent = numberCount;
});


resetButton.addEventListener("click", function() {
  textInput.value = "";
  wordCountDisplay.textContent = 0;
  charCountDisplay.textContent = 0;
  alphabetCountDisplay.textContent = 0;
  numberCountDisplay.textContent = 0;
});
