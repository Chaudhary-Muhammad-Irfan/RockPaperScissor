let userScore=0;
let CompuScore=0;
// We are getting the 3 choices by their class name so that we can use them later on .
const choices=document.querySelectorAll(".choice");


// We will make function to perform our different tasks.
// 1. First of all we will add event listener on all three choices
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    });
});

// We will create a function that will receive userChoice and  than after that computerChoice will be called
const playGame = (user_choice) => {
     console.log("User choice is : " , user_choice);
};

// A Function to generate Computer's choice
const generateComputerChoice = () => {
    // First store all 3 possible choices in an array
    const possibleChoices={rock , paper , scissor};
    Math.random(possibleChoices);
}