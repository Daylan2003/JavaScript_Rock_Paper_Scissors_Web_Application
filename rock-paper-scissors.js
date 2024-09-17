let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    };



let computerChoiceLabel = ' '
let userChoice = ' '
let result = ' '

let outcomeDisplay = document.querySelector('.outcome');
let choicesDisplay = document.querySelector('.choices');
let scoreDisplay = document.querySelector('.score');


scoreDisplay.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`

function computerChoice() {
    randNumber = Math.random()

    if (randNumber >= 0 && randNumber < 1/3){
    computerChoiceLabel = 'rock';    
}
else if (randNumber >= 1/3 && randNumber < 2/3){
    computerChoiceLabel = 'paper';
}
else if (randNumber >= 2/3 && randNumber < 1){
    computerChoiceLabel = 'scissors';
}
console.log(`The computer's choice is ${computerChoiceLabel}`);  
}

function winOrLoose(computerChoiceLabel, userChoice) {
    if (computerChoiceLabel === userChoice){
        score.ties += 1
        result = 'You tie!'
        outcomeDisplay.innerHTML = result
    }
    else if (computerChoiceLabel === 'rock' && userChoice == 'scissors'){
        result = 'You loose!'
        outcomeDisplay.innerHTML = result
    }
    else if (computerChoiceLabel === 'rock' && userChoice == 'paper'){
        result = 'You win!'
        outcomeDisplay.innerHTML = result
    }
    else if (computerChoiceLabel === 'paper' && userChoice == 'rock'){
        result = 'You loose!'
        outcomeDisplay.innerHTML = result
    }
    else if (computerChoiceLabel === 'paper' && userChoice == 'scissors'){
        result = 'You win!'
        outcomeDisplay.innerHTML = result
    }
    else if (computerChoiceLabel === 'scissors' && userChoice == 'paper'){
        result = 'You loose!'
        outcomeDisplay.innerHTML = result
    }
    else if (computerChoiceLabel === 'scissors' && userChoice == 'rock'){
        result = 'You win!'
        outcomeDisplay.innerHTML = result
    }
    
    if (result == 'You win!'){
        score.wins += 1;
    }
    else if (result == 'You loose!'){
        score.losses += 1;
    }
    else if (result == 'You tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    choicesDisplay.innerHTML = `You 
    <img src="images/${userChoice}-emoji.png" class="move-icon">
    Computer 
    <img src="images/${computerChoiceLabel}-emoji.png" class="move-icon">`;


    scoreDisplay.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
    
    //alert(`You picked ${userChoice}. Computer picked ${computerChoiceLabel}. ${result}. \n Score --> ties: ${score.ties} wins: ${score.wins} losses: ${score.losses}`);
}

function resetScore(score) {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    scoreDisplay.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
}