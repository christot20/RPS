//test
i = 0;
j = 0;
console.log("Hello");
function computerPlay(){ //computer choice function
    const choices = ["Rock", "Paper", "Scissors"]; //array of choices
    return choices[Math.floor(Math.random() * choices.length)]; //chooses random value from array
}

function playRound(compChoice, playerChoice){
    function game(){
        while (i <= 5 || j <= 5) {
            if (i === 5){
                console.log("You Win");
                return "You Win!";
            }
            else if (j === 5){
                console.log("You lose");
                return "You Lose";
            }
            else{
                return playRound(computerPlay(), prompt("What will you choose?"));
            }
        } 
    } 
    console.log(playerChoice);
    console.log(compChoice);
    if (playerChoice === "Rock" && compChoice === "Scissors"){
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You Win!";
    }
    else if (playerChoice === "Paper" && compChoice === "Rock"){
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You Win!";
    }
    else if (playerChoice === "Scissors" && compChoice === "Paper"){
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You Win!";
    }
    else if (playerChoice === compChoice){
        console.log("Tie");
        console.log(i, j);
        game();
        return "Tie";
    }
    else{ 
        console.log("You Lose.");
        j++;
        console.log(i, j);
        game();
        return "You Lose";
    }
    
}
playRound(computerPlay(), prompt("What will you choose?"));
