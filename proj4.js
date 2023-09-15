let RandomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput= document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const low = document.querySelector('.low')
const startOver = document.querySelector('.you')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a valid Guess !!')
    }
    else if(guess < 1){
        alert('Enter a number greater than 1 !!')
    }
    else if(guess > 100){
        alert('Enter a number less than 1 !!')
    }
    else{
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)
            displayMsg(`Your Game is Over. The correct number was ${RandomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === RandomNumber){
        displayMsg('Your Guess is Correct !!!')
        endGame()
    }
    else if(guess < RandomNumber){
        displayMsg('Number is lower than the Guess !!')
    }
    else if(guess > RandomNumber){
        displayMsg('Number is greater than the Guess !!')
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMsg(message){
    low.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start new Game</h3>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}
function newGame(){
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener('click', function(e) {
        RandomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        low.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;
    })
}