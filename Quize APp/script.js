const questions = [
  {
    question: "Which is the largest Animal in the World?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the Smallest Country in the World?",
    answer: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest Desert in the World?",
    answer: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the Smallest Continent in the World?",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const question = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((ans) => {
    console.log(ans);
    console.log(ans.text);
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
  });
};

const resetState = () => {
  nextBtn.classList.remove("hidden");
  nextBtn.classList.add("flex");
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
};

startQuiz();
