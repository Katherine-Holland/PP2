const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const scoreQuiz = document.getElementById('scoreQuiz');
const playAgain = document.getElementById('playAgain');
const wrapper = document.getElementById('wrapper');
let questionNumber = 0;
let scoreAmount = 0;

const questions = [
  {
    question: "How many types of snail live in the UK?",
    answers: ["99", "50", "Over 100", "200"],
    correct: 2
  },
  {
    question: "How long can snails hibernate?",
    answers: ["A year", "Two days", "Three months", "Up to 3 years"],
    correct: 3
  },
  {
    question: "Can snails hear?",
    answers: ["Yes", "No"],
    correct: 1
  },
];
/**
 * This function loads the quiz quesitons onto the screen
 */
function loadQuestion(questionNumber) {
  question.innerText = questions[questionNumber].question;
}
/**
 * This function loads the quiz answers onto the screen
 */
function loadAnswers(questionNumber) {
  const answers = questions[questionNumber].answers;
  answer1.innerText = answers[0];
  answer2.innerText = answers[1];
  answer3.innerText = answers.length > 2 ? answers[2] : '';
  answer4.innerText = answers.length > 3 ? answers[3] : '';
  // Hide buttons if there are no answers (for questions with less than 4 options)
  answer3.style.display = answers.length > 2 ? '' : 'none';
  answer4.style.display = answers.length > 3 ? '' : 'none';
}
/** This function checks if the answer is correct. 
 * It then displays the score based on the users input.
 * The function then moves the user onto the next question
 * or ends the game after all the questions
 * have been answered.
 */
function checkAnswer(answerNumber) {
  let correctAnswer = questions[questionNumber].correct;
  if (answerNumber === correctAnswer) {
    scoreAmount++;
    scoreQuiz.innerText = scoreAmount;
  }
  questionNumber++;
  if (questionNumber === questions.length) {
    endGame();
  } else {
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}
/**
 * This function ends the game and shows the score.
 * It asks the user if they want to play again.
 */
function endGame() {
  playAgain.style.visibility = "visible";
  question.innerText = "Quiz Complete! Your score: " + scoreAmount;
  // Hide answer buttons
  [answer1, answer2, answer3, answer4].forEach(button => {
    button.style.visibility = "hidden";
  });
}
/**
 * This function resets the quiz to allow the user to play again
 */
function resetQuiz() {
  questionNumber = 0;
  scoreAmount = 0;
  scoreQuiz.innerText = scoreAmount;
  playAgain.style.visibility = "hidden";
  [answer1, answer2, answer3, answer4].forEach(button => {
    button.style.visibility = "visible";
  });
  startQuiz();
}
/**
 * This function allows the user to choose to play again or end the game.
 * If the user selects 'play again' the quiz is reset.
 * If the user selects 'end the game' the quiz is ended and a link is
 * displayed to further information about snails.
 */
function endGameOption(chosen) {
  if (chosen === 0) {
    resetQuiz();
  } else {
    wrapper.innerHTML = 'Thanks for playing! Find out more about snails <a href="https://www.nhm.ac.uk/discover/snails-and-slugs.html" rel="noopener"  target="_blank">here</a>.';
        }
  }
/**
 * This function starts the quiz.
 */
function startQuiz() {
  playAgain.style.visibility = "hidden";
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}

startQuiz();



