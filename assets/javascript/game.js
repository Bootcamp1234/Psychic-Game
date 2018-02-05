// variables//
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = [];
var computerGuess = "";
var userguess = "";


// user key input not case sensitive//
document.onkeyup = function (event) {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();

    // lets computer pick random letter from alphabet//
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    lettersGuessed.push(userguess);

    //show user guesses functions//

    if (userguess === computerGuess) {
        wins++;
        alert("You Won!")
        guessesLeft = 9;
        lettersGuessed.length = 0;

    }
    if (guessesLeft === 0) {
        losses++;
        alert("Try again")
        guessesLeft = 9;
        lettersGuessed.length = 0;

    } else if (computerChoice.includes(userguess)) {
        computerChoice.push(userguess)
        guessesLeft--
    }

    // tally generator//
    var div = "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p> Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so Far: " + lettersGuessed + "</p>";

    document.querySelector('#game').innerHTML = div;
}