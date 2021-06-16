// TODO: Create an array with five question objects
var questions= [
    { q: `It's over Anakin I have the ______.`,  
      a: ["lightsaber", "high ground", "force", "deathstar"], 
      correct: '2'},

    { q: `The sky is ______.`,  
      a: ["blue", "green", "red", "yelow"], 
      correct: '1'},

    { q: `The most important meal of the day ______.`,  
      a: ["lunch", "second breakfast", "snacks", "breakfast"], 
      correct: '4'},     
];

var score = 0;
var userAnswer = "";
var questionBox = document.getElementById('questions');
var buttonBox = document.getElementById("mybuttons");
var buttonEl = document.getElementsByClassName('.mybuttons')
var soundCorrect = "";
var soundWrong = "";
var questionNumber = 0;
var currentQuestion = "";
var answerChoices = "";

displayQuestion = function (){ //var startScreen hide, call timer, call getQuestion. no other logic in playGame- else goes into displYQuestion or compareAnswers
     //have start button that playGame(); and is hidden afterwards 

   
   if (questionNumber < questions.length){
        currentQuestion = document.createElement('h3');
       currentQuestion.classList.add('mybuttons');
       currentQuestion.textContent = questions[questionNumber].q;
       questionBox.appendChild(currentQuestion);

       for(i = 0; i < questions[questionNumber].a.length; i++){
            answerChoices = document.createElement('button');
           answerChoices.classList.add('btn-success', 'btn')  //get button id's/value taskinator module edit and delete id's?
           answerChoices.setAttribute("id", i + 1);  //asigns unique ID to each button 
           answerChoices.innerHTML = ((i+1) + ". " + questions[questionNumber].a[i]);
           answerChoices.addEventListener('click', handleAnswer);
           buttonBox.appendChild(answerChoices);
       }
     
   }

};

  var handleAnswer = function (event) {
    console.log(event.target.id);
    if (event.target.id === questions[questionNumber].correct){
        console.log('correct!');
    } else{
        console.log('incorrect');
    }
    displayNext();
   }


   var displayNext = function (){
    questionBox.innerHTML="";
    buttonBox.innerHTML="";
questionNumber++;
displayQuestion();
   }
// document.querySelectorAll('.btn').forEach(function(el){
// el.addEventListener('click', function(){
//     console.log(this.id);
//     //call check answer function
// })
// })



// $('.mybuttons').on("click", function(){
//     var userAnswer = $('.btn').attr("id");
//     console.log(userAnswer);
// })

// $('questions').on("click", "btn", function(){
//     var userAnswer = $(this).attr("id");
//     console.log(userAnswer);
// })

// var allButtons = document.getElementsByClassName("btn")


// playGame = function(){ //get question and display it on the screen  //if{ no more questions, end quiz and show score.} else{
   
//     for (i=0; i < questions.length; i++){
//       var newQuestion= questions[i];
//       var correctAnswer = newQuestion.correct;
//         questionBox.innerHTML = newQuestion.q; 

        // document.addEventListener
        // $("mybuttons").on("click", "button", function(){
        //     var userAnswer = $(this)
        //     .attr("id");
        //     console.log(userAnswer);
        //     console.log("A")
    
        //     if (userAnswer === correctAnswer){
        //         console.log(userAnswer, "Correct", index);
        //         score++;
        //     }
        //     else {
        //         console.log(userAnswer, 'incorrect');
        //     }
        //     });
        
// }
// }

displayQuestion();


// /////////////////NOTES//////////////////NOTES///////////////////////NOTES//////////////NOTES////////////////////////////////////////////////////////////////////////////////////////////
// 

//questions:
//how do i iterate through my questions? use a for loop or appendChild at end of each question?
//
//
//
//
//
//
//
//
//
//
//
//
//

//use bootstrap grid on buttons to align them 

//value of userSelect must be captured --> SWITCH????

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
//EVENT DELEGATION!!!!
//$(".mybuttons")on("click", "buttons", function(checkAnswer))

// function populate(){
//     if(quiz.isEnded()){
//       showScores();
//     }
//     else {
//       // show question
//       var element = document.getElementById("question");
//       element.innerHTML = quiz.getQuestionIndex().text;
  
//       //show answer choices
//       var choices = quiz.getQuestionIndex().choices;
//       for(var i = 0; i < choices.length; i++){
//         var element = document.getElementById("choice" + i);
//         element.innerHTML = choices[i]; 
//         guess("btn" + i, choices[i]);
//       }
//         // show correct! or wrong!
//         showProgress();
//     }
//   };








