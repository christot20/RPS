//test
console.log("Hello");
function computerPlay(){ //computer choice function
    const choices = ["Rock", "Paper", "Scissors"]; //array of choices
    return choices[Math.floor(Math.random() * choices.length)]; //chooses random value from array
}
function playRound(compChoice, playerChoice){
    console.log(playerChoice);
    console.log(compChoice);
    if (playerChoice === "Rock" && compChoice === "Scissors"){
        console.log("You Win!");
        return "You Win!";
    }
    else if (playerChoice === "Paper" && compChoice === "Rock"){
        console.log("You Win!");
        return "You Win!";
    }
    else if (playerChoice === "Scissors" && compChoice === "Paper"){
        console.log("You Win!");
        return "You Win!";
    }
    else if (playerChoice === compChoice){
        console.log("Tie");
        return "Tie";
    }
    else{ 
        console.log("You Lose.");
        return "You Lose";
    }
}
playRound(computerPlay(), prompt("What will you choose?")); //parameters of compChoice and 