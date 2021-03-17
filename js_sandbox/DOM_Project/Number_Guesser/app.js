/* Game values  */
let min = 1, 
    max = 10, 
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

/* UI Elemets  */
const game = document.querySelector('#game'), 
      minNum = document.querySelector('.min-num'), 
      maxNum = document.querySelector('.max-num'), 
      guessBtn = document.querySelector('#guess-btn'), 
      guessInput = document.querySelector('#guess-input'), 
      message = document.querySelector('.message');

/* Asign UI Min and Max  */

minNum.textContent = min; 
maxNum.textContent = max; 

/* PLay again event listener */

game.addEventListener('mousedown', function(e){
  if( e.target.className === 'play-again'){
    window.location.reload(); 
  }
}) 

/* Listen for guess */

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess); 
  if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red'); 
  }
  /* check if won  */
  if (guess === winningNum){
    /* disable input */
    /* guessInput.disabled = true;  */
    /* change border green  */
    /* guessInput.style.borderColor = 'green';  */
    /* set message  */
    /* setMessage(`${winningNum} is correct. you WIN`, 'green');  */

    gameOver(true, `${winningNum} is correct. you WIN`, 'green'); 

  } else {
    /* Wrong number  */
    guessesLeft -=1;
    if (guessesLeft === 0 ){
      /* Game over  */
      gameOver(false, `Game over you lost`);
    } else {
      
      /* Game continues - answer wrong  */
      /* Border red  */
      guessInput.style.borderColor = 'red'; 
      /* clear input  */
      guessInput.value = ''; 

      setMessage(`${guess}  is not correct, ${guessesLeft} guesses Left`, 'red'); 
      
    }
  }
});  

function gameOver (won, msg){

    let color; 

    won === true ? color = 'green' : color = 'red'; 
    /* disable input */
    guessInput.disabled = true; 
    /* change border green  */
    guessInput.style.borderColor = color; 
    /* set message  */

    message.style.color = color; 
    setMessage(msg); 

    guessBtn.value = 'Play again'; 
    guessBtn.className += 'play-again';
}

function setMessage(msg, color){
  message.style.color = color; 
  message.textContent = msg; 
}

function getRandomNum(min, max) {
  return  Math.floor(Math.random()*(max-min+1) + min); 
}