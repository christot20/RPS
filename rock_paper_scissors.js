//test
console.log("Hello");
const choices = ["Rock", "Paper", "Scissors"]; //array of choices
function computerPlay(){ //computer choice function
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]; //chooses random value from array
    console.log(randomChoice); //print random value
    return randomChoice;
}
computerPlay();
function playRound(){
    compChoice = randomChoice;
    playerChoice = prompt("What will you choose?");
    if (playerChoice === "Rock" && compChoice === "Scissors"){
        console.log("You Win!");
    }
    else if (playerChoice === "Paper" && compChoice === "Rock"){
        console.log("You Win!");
    }
    else if (playerChoice === "Scissors" && compChoice === "Paper"){
        console.log("You Win!");
    }
    else if (playerChoice === compChoice){
        console.log("Tie");
    }
    else{ 
        console.log("You Lose");
    }
}
playRound();