class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []; //this is the letter user picked while trying to guess the secret word
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    let randomIndex = Math.floor(Math.random()*this.words.length)
    let randomWord = this.words[randomIndex]

    return randomWord 
  }

  checkIfLetter(keyCode) {
    //compare the keycode if it is between 65 - 90, then return true, otherwise false
    //return keyCode > 64 && keyCode < 91;
    if (keyCode <= 90 && keyCode >= 65) return true 
    return false 
    //we do not need else if, because if it is true, then it will stop, if it is
    //not true then it will return false --> less code than using } else{}
    
  }

  checkClickedLetters(letter) {
    // should check if the letter passed as an argument has already been pressed. It should return true if it was not or false in the opposite case.
    return this.letters.indexOf(letter.toUpperCase()) == -1;

  }

  addCorrectLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.guessedLetters.concat(letter);
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)){
      this.errorsLeft -= 1;
      if (!this.secretWord.includes(letter)){
        this.letters.push(letter);
      }
    }
   
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    }
    if (this.errorsLeft === 0){
      return true
    }
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length) return true
    return false 
  } 
  
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(event.which)
});
