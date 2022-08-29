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

function winner(playerScore, compScore){
    
    if(playerScore === 5){
        result.textContent = "Player Wins"
        return "Finish"

    }else if (compScore === 5){
        result.textContent = "Computer Wins"
        return "Finish"
    }

    
    
}

function createReplayButton(){
    groupOfButtons.appendChild(replayButton)
    replayButton.addEventListener('click', restartProgram)
}

function restartProgram(){
    window.location.reload()
}

function game(e){
    let playerSelection = e.target.value;
    const computerSelection = getComputerChoice()  ;
    let current = playRound(playerSelection ,computerSelection);
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



const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#comp-score");

const result = document.querySelector('.result');

let currentPlayerScore = 0;
let currentCompScore = 0;
let gameStatus = ""

const buttons = document.querySelectorAll('button');

const groupOfButtons = document.querySelector('.the-buttons')

buttons.forEach((button) => {;
    button.addEventListener('click', game);
});

const replayButton = document.createElement('button')
replayButton.innerText = "Play Again"
