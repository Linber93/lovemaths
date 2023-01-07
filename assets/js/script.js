// Wait for the DOM to finish loading before running the game
// Get the button element and add event listneners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`You clicked ${gametype}`)
            }
        })
    }
})
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answr has been processed
 */
function runGame() {

    //Creates two random numbers between 1 and 25
    num1 = Math.floor(Math.random() * 25) + 1 ;
    num2 =Math.floor(Math.random() * 25) + 1 ;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function icrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}