//PseudoCode here
//First to 5 wins
// If the cpu and players choice are the same, tie and no points given
//conditionals for rock vs paper vs scissors needed
console.log("Hello");
//computer function
const choices = ["Rock", "Paper", "Scissors"];
function computerPlay(){
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomChoice);
}
computerPlay();