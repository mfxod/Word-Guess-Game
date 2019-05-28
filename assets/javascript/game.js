// --- STEPS ---
// use keyboard event to check if userGuess is in wordChoice
// if it is replace the correct _ (or _s) with the letter
// then guessCounter-- and lettersLeft--

// if userGuess isn't in wordChoice add it alreadyGuessedText
// then guessCounter--

// don't repeat letters in alreadyGuessedText - ???

// if user guesses all the letters, alert("congrats") and reset() 
// if guessCounter = 0 and user hasn't guessed all letters, reset()
// if user guesses all ten words alert("You Win!")


// --- QUESTIONS ---
// where and how to use arrays?
// .split("") then .join("")?
// convert userGuess with .toLowerCase()?
// is there a way to store a key event differently than below?


var wins = 0;
var winsText = document.getElementById("wins");

var currentWordText = document.getElementById("current-word");

var guessCounter = 12;
var guessCounterText = document.getElementById("guesses-left");

var alreadyGuessed = []
var alreadyGuessedText = document.getElementById("already-guessed");

var wordBank = ["John", "Paul", "George", "Ringo"];
var wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

var wordArr = [];
for (var i = 0; i < wordChoice.length; i++) {
    wordArr[i] = "_";
    currentWordText.textContent = wordArr.join(" ");
}

winsText.textContent = wins;

var lettersLeft = wordChoice.length;

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    guessCounter--;
    guessCounterText.textContent = guessCounter;
}