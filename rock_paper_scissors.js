//see if you can have the buttons removed from the game when someone reaches 5 and append them when someone wants to 
//play again, either that or refresh i and j with alert, maybe have a button on the bottom to play again
let i = 0; //player score variable
let j = 0; //computer score variable
console.log("Hello"); //test to see if script runs
console.log(i,j);
function computerPlay(){ //computer choice function
    const choices = ["Rock", "Paper", "Scissors"]; //array of choices
    return choices[Math.floor(Math.random() * choices.length)]; //chooses random value from array
}
function game(){
    if(i === 5){
        console.log(i);
        //add a play again function, will porbably need to mkae whole game a function that would be
        //called for this to work or have the thing set i and j to 0
        playAgain();
        return "You won the Match!";
    }
    else if (j === 5){
        console.log(j);
        //add a play again function
        playAgain();
        return "You lost the Match!";
    }
    else{
        console.log("next round")
        return "Next Round!";
    }
}
function playRound(e){ //round function
    console.log(e);
    function playerPlay(){
        if(e.srcElement.outerHTML === "<img src=\"Icons/rock.png\" alt=\"\">") {
            document.getElementById("playerpic").src="Icons/rock.png";
            return "Rock";
        }
        else if(e.srcElement.outerHTML === "<img src=\"Icons/paper.png\" alt=\"\">") {
            document.getElementById("playerpic").src="Icons/paper.png";
            return "Paper";
        }
        else if(e.srcElement.outerHTML === "<img src=\"Icons/scissors.png\" alt=\"\">") {
            document.getElementById("playerpic").src="Icons/scissors.png";
            return "Scissors";
        }
    } 
    let compChoice =  computerPlay();
    if (compChoice === "Rock"){
        document.getElementById("cpupic").src="Icons/rock.png";
    }
    else if (compChoice === "Paper"){
        document.getElementById("cpupic").src="Icons/paper.png";
    }
    else if (compChoice === "Scissors"){
        document.getElementById("cpupic").src="Icons/scissors.png";
    }
    let playerChoice = playerPlay();
    console.log(playerChoice);
    console.log(compChoice);
    chooseme.textContent = playerChoice;
    choosecpu.textContent = compChoice;

    if (playerChoice === "Rock" && compChoice === "Scissors"){  //if player wins conditionals
        console.log("You Win!");
        i++;
        scoreme.textContent = i;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === "Paper" && compChoice === "Rock"){ //if player wins conditionals
        console.log("You Win!");
        i++;
        scoreme.textContent = i;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === "Scissors" && compChoice === "Paper"){ //if player wins conditionals
        console.log("You Win!");
        i++;
        scoreme.textContent = i;
        console.log(i, j);
        game();
        return "You won the round!";
    }
    else if (playerChoice === compChoice){   //if the round is a tie
        console.log("Tie");
        console.log(i, j);
        scoreme.textContent = i;
        scorecpu.textContent = j;
        game();
        return "The round is a tie!";
    }
    else{ 
        console.log("You Lose.");   //if computer wins the round
        j++;
        console.log(i, j);
        scorecpu.textContent = j;
        game();
        return "You lost the round!";
    }
}
const bttn = document.querySelectorAll("button");
bttn.forEach(bttn => bttn.addEventListener("click", playRound));    

const scoreme = document.querySelector("#scoreme"); //playerscore tag
const scorecpu = document.querySelector("#scorecpu"); //cpuscore tag
scoreme.textContent = i;
scorecpu.textContent = j;

const chooseme = document.querySelector("#playerletters"); //player letter choice
const choosecpu = document.querySelector("#cpuletters"); //cpu letter choice




function playAgain(){
    console.log(scoreme);
    console.log(scorecpu);
    modal.style.display = "block";
    if (i === 5){
        document.getElementById("modaltext").innerHTML = "You Won!";
    }
    else if (j === 5){
        document.getElementById("modaltext").innerHTML = "You Lost!";
    }
    //maybe build a function to restart the webpage  
}

let modal = document.getElementById("myModal"); //popup modal at end of game
let span = document.getElementsByClassName("close")[0]; //x button of modal


span.onclick = function() {  //exit modal if x button is clicked
  modal.style.display = "none";
  window.location.reload(); //reload page
}

window.onclick = function(e) {  //exit if clicked outside of box
    if (e.target == modal) {    
      modal.style.display = "none";
      window.location.reload();  //reload page
    }
  }

//make a modal that goes off everytime and says if you either won or lost
//have the page refresh every time someone reaches 5
//make a separate modal for if u win or lose with different color, text, etc.
//maybe move them to the functions where i=5 and x=5

//make buttons for each of the choices with pictures of rock/paper/scissors, allow for buttons to highlight
//when hovered and get bigger

//have a text area that shows if you won the round or lost the round and what the cpu chose

//set the player choice picture as a variable and see if you can change
//the type of tag for it to an img
//have it choose the img depending on the choice of player and cpu