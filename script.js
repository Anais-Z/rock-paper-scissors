function getComputerChoice(){
    //3 choices stored in an array
    let choices = ["rock", "paper", "scissors"];

    //choose random value from array
    let singleChoice = choices[Math.floor(Math.random() * choices.length)];

    return singleChoice;
}

function playRound(playerChoice, computerChoice){
    let roundWinner = null;
    //checks which item the user chose
    switch(playerChoice){
        case "rock":
           return roundWinner = playerRock(computerChoice);
        case "paper":
          return  roundWinner = playerPaper(computerChoice);
        case "scissors":
           return roundWinner = playerScissors(computerChoice);
    }

    

}

//evaluates if player chose rock
function playerRock(computerChoice){
    if(computerChoice === "scissors"){
        return "Player Wins";
    }else if(computerChoice === "paper"){
        return "Computer Wins";
    }else{
        return "Tie";
    }
}

//evaluates if player chose paper
function playerPaper(computerChoice){
    if(computerChoice === "rock"){
        return "Player Wins";
    }else if(computerChoice === "scissors"){
        return "Computer Wins";
    }else{
        return "Tie";
    }
}

//evaluates if player chose scissors
function playerScissors(computerChoice){
    if(computerChoice === "paper"){
        return "Player Wins";
    }else if(computerChoice === "rock"){
        return "Computer Wins";
    }else{
        return "Tie";
    }
}

//checks to see if a winner if one of the players reaches 5 points
function winner(playerScore, compScore){
    
    if(playerScore === 5){
        result.textContent = "Player Wins The Game"
        return "Finish"

    }else if (compScore === 5){
        result.textContent = "Computer Wins The Game"
        return "Finish"
    }

    
    
}

//creates play again button
function createReplayButton(){
    replayButtonDiv.appendChild(replayButton)
    replayButton.addEventListener('click', restartProgram)
    
}

//restarts program when function is called
function restartProgram(){
    window.location.reload()
}

function game(e){
    let playerSelection = e.target.value;
    const computerSelection = getComputerChoice()  ;
    let current = playRound(playerSelection ,computerSelection);

    if(current === 'Tie'){
        result.textContent = `${current}` 
    }else{
        result.textContent = `${current} This Round`
    }
     

    playerWeapon.textContent = playerSelection
    compWeapon.textContent = computerSelection

    if(current == 'Player Wins'){

        currentPlayerScore++;

        console.log(`Player score = ${currentPlayerScore}`);

        playerScore.textContent = currentPlayerScore;

    } else if(current == "Computer Wins"){

        currentCompScore++;
       compScore.textContent = currentCompScore;

        console.log(`Comp score = ${currentCompScore}`);
    };

   let status =  winner(currentPlayerScore, currentCompScore)

   if(status == "Finish"){

    buttons.forEach(button => button.disabled = true)

    createReplayButton()
   }
    
};



//accessing elements from index.html
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#comp-score");

const result = document.querySelector('.result');
result.style.height = '27.5px'

let currentPlayerScore = 0;
let currentCompScore = 0;
let gameStatus = ""

const buttons = document.querySelectorAll('button');

const groupOfButtons = document.querySelector('.the-buttons')

buttons.forEach((button) => {;
    button.addEventListener('click', game);
});

//creating elements 

const replayButton = document.createElement('button')
replayButton.innerText = "Play Again"
replayButton.classList.add('replay-button')


const main = document.querySelector('.main')

const replayButtonDiv = document.createElement('div')
replayButtonDiv.classList.add('replay')
main.appendChild(replayButtonDiv)

const playerBlock = document.querySelector('.player-role')
const compBlock = document.querySelector('.comp-role')

const playerWeapon = document.createElement('p')
const compWeapon = document.createElement('p')

playerBlock.appendChild(playerWeapon)
compBlock.appendChild(compWeapon)

playerWeapon.style.color = "lightblue"
playerWeapon.style.fontSize = '25px'
playerWeapon.style.height = '29.5px'

compWeapon.style.color = "lightblue"
compWeapon.style.fontSize = '25px'
compWeapon.style.height = '29.5px'