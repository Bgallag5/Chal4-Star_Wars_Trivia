// TODO: Create an array with five question objects
var questions= [
    { q: `It's over Anakin I have the ______.  
    a: lightsaber 
    b: high ground
    c: force
    d: deathstar`, 
    correct: 'b'},
    
    { q: `Which of the following characters was NOT played by Mike Myers in Austin Powers?.  
    a: Autsin Powers 
    b: Fat Bastard
    c: Dr. Evil 
    d: Number 2`, 
    correct: 'd'},
    
    { q: `It's over Anakin I have the ______.  
    a: lightsaber 
    b: high ground
    c: force
    d: deathstar`, 
    correct: 'b'},
    
    { q: `It's over Anakin I have the ______.  
    a: lightsaber 
    b: high ground
    c: force
    d: deathstar`, 
    correct: 'b'},
    
    { q: `It's over Anakin I have the ______.  
    a: lightsaber 
    b: high ground
    c: force
    d: deathstar`, 
    correct: 'b'},
    
    { q: `It's over Anakin I have the ______.  
    a: lightsaber 
    b: high ground
    c: force
    d: deathstar`, 
    correct: 'b'},
    ];

var score = 0;
var userAnswer = "";
var questionBox = document.getElementById('questions');
var aSelection = document.getElementById('aButton');
var bSelection = document.getElementById('bButton');
var cSelection = document.getElementById('cButton');
var dSelection = document.getElementById('dButton');

var soundCorrect = "";
var soundWrong = "";


displayQuestion = function (){ //var startScreen hide, call timer, call getQuestion. no other logic in playGame- else goes into displYQuestion or compareAnswers
     //have start button that playGame(); and is hidden afterwards 

   playGame();

}

playGame = function(){ //get question and display it on the screen  //if{ no more questions, end quiz and show score.} else{
   
    for (i=0; i < questions.length; i++){
      var newQuestion= questions[i];
      var correctAnswer = newQuestion.correct;
        questionBox.innerHTML = newQuestion.q; 

        (function(index){
        $(".mybuttons").on("click", "button", function(){
            var userAnswer = $(this)
            .attr("value");
    
            if (userAnswer === correctAnswer){
                console.log(userAnswer, "Correct", index);
                score++;
            }
            else {
                console.log(userAnswer, 'incorrect');
            }
            })
        })(i);
}
}




//value of userSelect must be captured --> SWITCH????



displayQuestion();
// /////////////////NOTES//////////////////NOTES///////////////////////NOTES//////////////NOTES////////////////////////////////////////////////////////////////////////////////////////////
// 

//function: display question
// onclick buttons returns userA and t/f, check against compA, and alert/change score
//load next question (replace, append,) maybe a createElement('div') with text content 'the question'
//add timer, when timer hits zero bouce to next question
//add local storage to save local high score 
//load question AND answer options together in one append/have 4 buttons for abcd instead of radio check boxes? 

//display home page
// when game begin, display 1st q 
// save user input and compare to correct 
//alert score somehow, while another q- display next q in div 
//












