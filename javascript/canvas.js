class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.positionX = 300;
    this.positionY = 700;
    this.lineSpace = 50;
    this.lineWidth = 20;
  }

  
  createBoard() {
    const canvas = document.getElementById('hangman');
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines ();
   
  }

  
  drawLines() {

    for (let i = 0; i < secretWord.length; i++){

      this.context.beginPath()
      this.context.moveTo(this.positionX + this.lineSpace * 1, this.positionY);
      this.context.lineTo(this.positionX + this.lineSpace * 1 + this.lineWidth, this.positionY);
      this.context.stroke();
      this.context.closePath();
    
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font ='Helvetia'
    this.context.fillStyle = 'black'
    if (!this.secretWord(letter) && errorsLeft >= 0){
      this.context.fillText(
        
      )
      
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
