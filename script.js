function getComputerChoice(){
    //3 choices stored in an array
    let choices = ["rock", "paper", "scissors"]

    //choose random value from array
    let singleChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(`Computer chose ${singleChoice}`)
    return singleChoice
}

function playRound(playerChoice, computerChoice){
    //checks which item the user chose
    switch(playerChoice){
        case "rock":
            return playerRock(computerChoice)
        case "paper":
            return playerPaper(computerChoice)
        case "scissors":
            playerScissors(computerChoice)
    }

}

//evaluates if player chose rock
function playerRock(computerChoice){
    if(computerChoice === "scissors"){
        return alert("You Win")
    }else if(computerChoice === "paper"){
        return alert("You Lose")
    }else{
        return alert("It's a TIe")
    }
}

//evaluates if player chose paper
function playerPaper(computerChoice){
    if(computerChoice === "rock"){
        return alert("You Win")
    }else if(computerChoice === "scissors"){
        return alert("You Lose")
    }else{
        return alert("It's a TIe")
    }
}

//evaluates if player chose scissors
function playerScissors(computerChoice){
    if(computerChoice === "paper"){
        return alert("You Win")
    }else if(computerChoice === "rock"){
        return alert("You Lose")
    }else{
        return alert("It's a TIe")
    }
}

function game(){

    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose rock, paper or scissors", "rock")

        console.log(`You chose ${playerSelection}`)
        const computerSelection = getComputerChoice()
        
        playRound(playerSelection.toLowerCase(),computerSelection)
    }

}

game()