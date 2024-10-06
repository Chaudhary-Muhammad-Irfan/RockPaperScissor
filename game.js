let userScore=0;
let CompuScore=0;
// We are getting the 3 choices by their class name so that we can use them later on .
const choices=document.querySelectorAll(".choice");
const message = document.querySelector(".msg");
const uScore=document.querySelector("#uScore");
const cScore=document.querySelector("#cScore");

// We will make function to perform our different tasks.
// 1. First of all we will add event listener on all three choices
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    });
});
// A Function to generate Computer's choice
const generateComputerChoice = () => {
    // First store all 3 possible choices in an array
    const possibleChoices=["rock",  "paper", "scissor"];
    const computerRandomChoice=Math.floor(Math.random()*3);
    return possibleChoices[computerRandomChoice];
}
// A function for the Draw Game
const drawGame = () =>{
    console.log("Game is Drawn");
    message.innerHTML="Game is Drawn";
    uScore.innerHTML=userScore;
    cScore.innerHTML=CompuScore;
    message.style.backgroundColor="cadetblue";
}
// We will create a function that will receive userChoice and  than after that computerChoice will be called
const playGame = (user_choice) => {
     console.log("User choice is : " , user_choice);
     var computerChoice=generateComputerChoice();
     console.log("Computer Choice is : ", computerChoice);
     // Now we will compare the choices of both the user and the computer. 
     let userHasWon=true;
     if(user_choice===computerChoice)
     {
        drawGame();
     }
     else if(user_choice==="rock")
     {
        // Mean now computer choice can be either scissor or paper
        if(computerChoice==="paper")
        {
            // Mean user has won the game
            userHasWon=false;
            CompuScore++;
        }
        else{
            userHasWon=true;
            userScore++;
        }
        showWinner(userHasWon, user_choice , computerChoice);
     }
     else if(user_choice==="paper")
     {
        // mean computer has only choice of rock or scissor
        if(computerChoice==="rock")
        {
            // so user has win
            userHasWon=true;       
            userScore++;     
        }
        else{
            userHasWon=false;
            CompuScore++;
        }
        showWinner(userHasWon, user_choice , computerChoice);
     }
     else{
        //mean user has choosen scissor and computer has choice of paper and rock
        if(computerChoice==="paper")
        {
            userHasWon=true;
            userScore++;
        }
        else{
            userHasWon=false;
            CompuScore++;
        }
        showWinner(userHasWon, user_choice , computerChoice);
     }
};
// A function to show result/Winner
const showWinner = (winner , userChoice , compChoice) =>{
    if(winner)
    {
        message.innerHTML=`You win! Your ${userChoice} beats Computer's ${compChoice}`;
        uScore.innerHTML=userScore;
        cScore.innerHTML=CompuScore;
        message.style.backgroundColor="green";
    }
    else
    {
        message.innerHTML=`You lose! Computer's ${compChoice} beats your ${userChoice}`;
        uScore.innerHTML=userScore;
        cScore.innerHTML=CompuScore;
        message.style.backgroundColor="red";
    }
}