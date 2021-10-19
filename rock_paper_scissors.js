i = 0; //player score variable
j = 0; //computer score variable
console.log("Hello"); //test to see if script runs
function computerPlay(){ //computer choice function
    const choices = ["rock", "paper", "scissors"]; //array of choices
    return choices[Math.floor(Math.random() * choices.length)]; //chooses random value from array
}

function playRound(e, compChoice, playerChoice){ //round function
    function game(){
        if(i === 5){
            console.log(i);
            return "You won the Match!"
        }
        else if (j === 5){
            console.log(j);
            return "You lost the Match!"
        }
        else{
            console.log("next round")
            return "Next Round!"
        }
    }
    function playerPlay(){
        if(e.srcElement.textContent === "Rock") {
            return "rock";
        }
        else if(e.srcElement.textContent === "Paper") {
            return "paper";
        }
        else if(e.srcElement.textContent === "Scissors") {
            return "scissors";
        }
    } 
    compChoice =  computerPlay();
    playerChoice = playerPlay();
    console.log(playerChoice);
    console.log(compChoice);

    if (playerChoice === "rock" && compChoice === "scissors"){  //if player wins conditionals
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === "paper" && compChoice === "rock"){ //if player wins conditionals
        console.log("You Win!");
        i++;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === "scissors" && compChoice === "paper"){ //if player wins conditionals
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
const bttn = document.querySelectorAll("button");
bttn.forEach(bttn => bttn.addEventListener("click", playRound));