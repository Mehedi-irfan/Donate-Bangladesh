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
let nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = `Next`;
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if (ans.correct === true) {
      button.dataset.correct = ans.correct;
    }
    button.addEventListener("click", (e) => {
      if (ans.correct === true) {
        button.classList.add("correct");
        score++;
      } else {
        button.classList.add("incorrect");
      }
      Array.from(answerBtn.children).forEach((btn) => {
        if (btn.dataset.correct === "true") {
          btn.classList.add("correct");
        }
        btn.disabled = true;
      });
      nextBtn.classList.remove("hidden");
      nextBtn.classList.add("flex");
    });
  });
};

const resetState = () => {
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
};

const showScore = () => {
  resetState();
  question.innerHTML = `You Scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again";
};

const handleNextBtn = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
