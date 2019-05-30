// --- USER GUESS LOOP ---
// document.onkeyup = function(event) {
//     if (userGuess is in wordArr) {
//         replace the corresponding _(s) in blankArr with              userGuess
//         maybe use forEach()?
//         then guessCounter--
//     } else {
//         add userGuess to wrongGuesses
//         no duplicates in wrongGuesses
//         then guessCounter--
//     }
// }

//  --- SOME OF THE CONDITIONS ---
// if (user guesses all letters in word) {
//     alert("Congrats");
//     reset();
// }

// if (guessCounter = 0 and user hasn't guessed word) {
//     show word;
//     reset();
// }

// --- QUESTIONS ---
// .split(), .join(), .charAt(), match() with regex, concat()? 
// convert userGuess and wordBank words with .toLowerCase()?

var wins = 0;
var wordBank = ["John", "George", "Ringo"];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordArr = word.split("");
var blankArr = [];
var userGuess = [];
var guessCounter = 12;
var wrongGuesses = [];
var lettersLeft = word.length;

var winsText = document.getElementById("wins");
var wordText = document.getElementById("word");
var guessCounterText = document.getElementById("guess-counter");
var wrongGuessesText = document.getElementById("wrong-guesses");

winsText.textContent = wins;
guessCounterText.textContent = guessCounter;
wrongGuessesText.textContent = wrongGuesses.join(" ");

function showBlankArr() {
    for (var i = 0; i < word.length; i++) {
        blankArr[i] = "_";
        wordText.textContent = blankArr.join(" ");
    }
}

function guessLoop() {
    for (var i = 0; i < word.length; i++) {
        if (wordArr[i] === userGuess) {
            // replace the blankArr[i] with userGuess;
        } else {
            // add userGuess to wrongGuessesText only once
            wrongGuesses.push(userGuess);
        }
    }
}

document.onkeyup = function(event) {
    showBlankArr()
    var guess = event.key;
    userGuess.push(guess);
    guessLoop();
    console.log(userGuess);
    guessCounter--;
}