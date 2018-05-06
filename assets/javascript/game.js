console.log("yo");
//letters to select from: 
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var guesses = 0;
var computerGuess = options[Math.floor(Math.random() * options.length) - 1];

function reset() {
  remainingGuesses = 9;
  guesses = 0;
  computerGuess = options[Math.floor(Math.random() * (options.length - 1))]
}
function displayStats(params) {
  var html = "<h1>Guess what letter I am thinking of?</h1>" +
    "<h4>Wins: " + wins + "</h4>" +
    "<h4>Losses: " + losses + "</h4>" +
    "<h4>Guesses: " + guesses + "</h4>" +
    "<h4>Guesses Remaining: " + remainingGuesses + "</h4>";

  document.querySelector('#game').innerHTML = html;
}

document.onkeyup = function (event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);

  //randomly chooses a letter: 
  console.log(computerGuess);

  //compare userGuess and computerGuess and determine result:

  if (userGuess == computerGuess) {
    wins++;
    alert("Wins: " + wins);
    guesses++;
    --remainingGuesses;
    reset()
  }
  else if (userGuess != computerGuess) {
    if (remainingGuesses != 0) {
      alert("Losses: " + losses);
      guesses++;
      --remainingGuesses;
    }else{
       ++losses;
       alert("GAME OVER SUCKER");
       reset()
    }
  } 
  // 4. Wins: (# of times the user has guessed the letter correctly)
  // 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

  displayStats()

}
displayStats()

// comp gueses a random letter
  //create a var for random guesses
    //array
    // array holds the alpabet
  // take our arrray

//user presses a key to gess the letter
