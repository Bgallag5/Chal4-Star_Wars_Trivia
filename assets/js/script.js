// TODO: Create an array with five question objects
var questions= [
    { q: `"It's over Anakin I have the ______."`,  
      a: ["Lightsaber", "High ground", "Force", "Deathstar"], 
      correct: '2'},

    { q: `In episode 3, Anakin turned to the dark side searching for the power to protect:`,  
      a: ["His Mother", "The Jedi Order", "Padme", "Princess Leia"], 
      correct: '3'},

    { q: `All of the following are Sith lords except:`,  
      a: ["Count Dooku", "Darth Sidious", "General Grevious", "Darth Maul"], 
      correct: '3'},     

      { q: `Chewbacca is a member of what species?`,  
      a: ["Gungan", "Wookie", "At-at", "Jawa"], 
      correct: '2'}, 

      { q: `Which Jedi Master carried a purple lightsaber, instead of a traditional green or blue one?`,  
      a: ["Darth Maul", "Anakin Skywalker", "Qui Gon Jinn", "Mace Windu"], 
      correct: '4'}, 

      { q: `What is Luke Skywalker's home planet?`,  
      a: ["Tatooine", "Endor", "Hoth", "Earth"], 
      correct: '1'}, 

      { q: `A 'fan-cut' of Episodes 1 and 2 edited out every line of dialog from THIS character:`,  
      a: ["Jaba the Hut", "Padme", "C3PO", "Jar Jar Binks"], 
      correct: '4'}, 
    ];

var score = 0;
var userAnswer = "";
var questionBox = document.getElementById('questions');
var buttonBox = document.getElementById("mybuttons");
var buttonEl = document.getElementsByClassName('.mybuttons');
var playAgain = document.getElementById('playAgain')
var scoreCard = document.getElementById('scorebox');
var timer = document.getElementById('timer');
var soundCorrect = new Audio("assets/images_sounds/Happy_Confirmation.mp3");
var soundWrong = new Audio("assets/images_sounds/upsetr2.mp3")
var lightsaber = new Audio("assets/images_sounds/lightsaber_03.wav")
var questionNumber = 0;
var timeLeft;
var currentQuestion;
var answerChoices;
var finalStats;


$('#startButton').on("click", function(){
$('.openScreen').hide();
$('#gameDisplay').show();
playGame();
lightsaber.play();
})

playGame = function (){ //var startScreen hide, call timer, call getQuestion. no other logic in playGame- else goes into displYQuestion or compareAnswers
     //have start button that playGame(); and is hidden afterwards 
     questionBox.style.display = "block";
     timer.style.display = "block";
     playAgain.style.display = "none";
     scoreCard.style.display = "none";
     timeLeft = 60;
     countDown();

   
   if (questionNumber < questions.length){
        currentQuestion = document.createElement('h3');
       currentQuestion.classList.add('mybuttons');
       currentQuestion.textContent = questions[questionNumber].q;
       questionBox.appendChild(currentQuestion);

       for(i = 0; i < questions[questionNumber].a.length; i++){
            answerChoices = document.createElement('button');
           answerChoices.classList.add('btn-success', 'btn', 'col-md-5')  //get button id's/value taskinator module edit and delete id's?
           answerChoices.setAttribute("id", i + 1);  //asigns unique ID to each button 
           answerChoices.innerHTML = ((i+1) + ". " + questions[questionNumber].a[i]);
           answerChoices.addEventListener('click', handleAnswer);
           buttonBox.appendChild(answerChoices);
       }
   }
   
   endGame();
};

  var handleAnswer = function (event) {
      var chosenAnswer = event.target.getAttribute('id')
      
    console.log(event.target.id);
    if (chosenAnswer === questions[questionNumber].correct){
        score++;
        soundCorrect.play();
        alert('Thats Correct!');
    } else{
      soundWrong.play();
        alert('Incorrect')
    }
    displayNext();
   }


   var displayNext = function (){
    questionBox.innerHTML="";
    buttonBox.innerHTML="";
questionNumber++;
playGame();
   }


   
   var gameTimer = setInterval(countDown, 1000); 
function countDown(){
  document.getElementById('timer').innerHTML = (timeLeft + " Seconds Remaining")
  if(timeLeft > 0){
  timeLeft--;
  } else if(timeLeft <= 0){
    displayNext();
  }
  
}

function endGame(){
  if (questionNumber == questions.length){
    clearInterval(gameTimer);
    questionBox.style.display = "none";
    timer.style.display = "none";
    playAgain.style.display = "block";
    scoreCard.style.display = "block";
    buttonBox.innerHTML="";
    var finalStats = document.createElement('h3')
    finalStats.innerHTML = "You finished with a score of " + score + "/" + questions.length;
    scoreCard.appendChild(finalStats);
  } 
}

$('#playAgain').on("click", function(){
  score = 0;
  questionNumber = 0;
  scoreCard.innerHTML = "";
  scoreCard.style.display = "none";
  gameTimer = setInterval(countDown, 1000);
  lightsaber.play();
  // questionBox.innerHTML = "";
  playGame();
})




// /////////////////NOTES//////////////////NOTES///////////////////////NOTES//////////////NOTES////////////////////////////////////////////////////////////////////////////////////////////
// 

//questions:
//how do i iterate through my questions? use a for loop or appendChild at end of each question?
//
////use display: none to hide elements on click start button, create start page  'div'.style.display = "none";
//
//TODO:::::
//create results screen 
//
//if (no more questions){showResults()}
//if timer hits 0 end quiz
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








