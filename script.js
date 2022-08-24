function getComputerChoice(){
    //3 choices stored in an array
    let choices = ["rock", "paper", "scissors"]

    //choose random value from array
    let singleChoice = choices[Math.floor(Math.random() * choices.length)]

    return console.log(`Computer chose ${singleChoice}`)
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
        return console.log("You Win")
    }else if(computerChoice === "paper"){
        return console.log("You Lose")
    }else{
        return console.log("It's a TIe")
    }
}

//evaluates if player chose paper
function playerPaper(computerChoice){
    if(computerChoice === "rock"){
        return console.log("You Win")
    }else if(computerChoice === "scissors"){
        return console.log("You Lose")
    }else{
        return console.log("It's a TIe")
    }
}

//evaluates if player chose scissors
function playerScissors(computerChoice){
    if(computerChoice === "paper"){
        return console.log("You Win")
    }else if(computerChoice === "rock"){
        return console.log("You Lose")
    }else{
        return console.log("It's a TIe")
    }
}