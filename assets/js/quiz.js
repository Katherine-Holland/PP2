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

function loadQuestion(questionNumber) {
  question.innerText = questions[questionNumber].question;
}

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

function checkAnswer(answerNumber) {
  console.log('answer number chosen: ', answerNumber);
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

function endGame() {
  playAgain.style.visibility = "visible";
  question.innerText = "Quiz Complete! Your score: " + scoreAmount;
  // Hide answer buttons
  [answer1, answer2, answer3, answer4].forEach(button => {
    button.style.visibility = "hidden";
  });
}

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

function endGameOption(chosen) {
  if (chosen === 0) {
    resetQuiz();
  } else {
    wrapper.innerHTML = 'Thanks for playing! Find out more about snails <a href="https://www.nhm.ac.uk/discover/snails-and-slugs.html" rel="noopener"  target="_blank">here</a>.';
        }
  }

function startQuiz() {
  playAgain.style.visibility = "hidden";
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}

startQuiz();



