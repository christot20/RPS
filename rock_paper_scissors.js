//test
i = 0; //player score variable
j = 0; //computer score variable
console.log("Hello");
function computerPlay(){ //computer choice function
    const choices = ["Rock", "Paper", "Scissors"]; //array of choices
    return choices[Math.floor(Math.random() * choices.length)]; //chooses random value from array
}

function playRound(compChoice, playerChoice){ //round function
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
                return playRound(computerPlay(), prompt("What will you choose? Rock, paper, or scissors?"));
            }
        } 
    } 
    console.log(playerChoice);
    console.log(compChoice);
    if (playerChoice === "Rock" && compChoice === "Scissors"){  //if player wins conditionals
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === "Paper" && compChoice === "Rock"){
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === "Scissors" && compChoice === "Paper"){
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
    else{ 
        console.log("You Lose.");   //if computer wins the round
        j++;
        console.log(i, j);
        game();
        return "You lost the round!";
    }
    
}
playRound(computerPlay(), prompt("What will you choose?"));
