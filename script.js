function getComputerChoice(){
    //3 choices stored in an array
    let choices = ["rock", "paper", "scissors"]

    //choose random value from array
    let singleChoice = choices[Math.floor(Math.random() * choices.length)]

    return singleChoice

}