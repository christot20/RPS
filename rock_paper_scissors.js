//test
i = 0; //player score variable
j = 0; //computer score variable
console.log("Hello");
function computerPlay(){ //computer choice function
    const choices = ["rock", "paper", "scissors"]; //array of choices
    return choices[Math.floor(Math.random() * choices.length)]; //chooses random value from array
}
function game(){  //round loop function, first to 5 wins, loop ends
    while (i <= 5 || j <= 5) {
        if (i === 5){   //if human wins
            console.log("You Win");
            return "You Won!";
        }
        else if (j === 5){  //if computer wins
            console.log("You lose");
            return "You Lost!";
        }
        else{
            return playRound(computerPlay(), prompt("What will you choose? Rock, Paper, or Scissors?").toLowerCase());
        }
    } 
} 
function playRound(compChoice, playerChoice){ //round function
    console.log(playerChoice);
    console.log(compChoice);
    if (playerChoice === "rock" && compChoice === "scissors"){  //if player wins conditionals
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === "paper" && compChoice === "rock"){
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === "scissors" && compChoice === "paper"){
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === compChoice){   //if the round is a tie
        console.log("Tie");
        console.log(i, j);
        game();
        return "The round is a tie!";
    }
    else if(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        console.log("invalid answer");
        game();
        return "Please enter either Rock, Paper, or scissors.";
    }
    else{ 
        console.log("You Lose.");   //if computer wins the round
        j++;
        console.log(i, j);
        game();
        return "You lost the round!";
    }
    
}
playRound(computerPlay(), prompt("What will you choose?").toLowerCase());
