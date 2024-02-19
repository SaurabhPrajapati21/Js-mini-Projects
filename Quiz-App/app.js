const questions = [
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue-Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Crocodile", correct: false },
    ],
  },
  {
    question: "Which is the largest ocean in the world ?",
    answers: [
      { text: "Pacific-ocean", correct: true },
      { text: "Antartic-ocean", correct: false },
      { text: "Artic-ocean", correct: false },
      { text: "indian-ocean", correct: false },
    ],
  },
  {
    question: "who is the prime minister of india ?",
    answers: [
      { text: "Rahul Gandhi", correct: false },
      { text: "Mamata Banerjee", correct: false },
      { text: "Narendra Modi", correct: true },
      { text: "Akhilesh Yadav", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world ?",
    answers: [
      { text: "India", correct: false },
      { text: "Vatican-city", correct: true },
      { text: "France", correct: false },
      { text: "Bhutan", correct: false },
    ],
  },
  {
    question: "Which is the largest continent in the world ?",
    answers: [
      { text: "Africa", correct: false },
      { text: "Europe", correct: false },
      { text: "North-Amewica", correct: false },
      { text: "Asia", correct: true },
    ],
  },
];

const question = document.getElementById("question");
const ansbtn = document.getElementById("ansbtn");
const nextbtn = document.getElementById("nextbtn");

let currentQuestuonIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestuonIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestuonIndex];
  let questionNo = currentQuestuonIndex + 1;
  question.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextbtn.style.display = "none";
  while (ansbtn.firstChild) {
    ansbtn.removeChild(ansbtn.firstChild);
  }
}

function selectAnswer(e) {
  let selectedBtn = e.target;
  let isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(ansbtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
}
function showScore() {
  resetState();
  question.innerHTML = `you scored ${score} out of ${questions.length}`;
  nextbtn.innerHTML = "Play Again";
  nextbtn.style.display = "block";
}

function handleNextButton() {
  currentQuestuonIndex++;
  if (currentQuestuonIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextbtn.addEventListener("click", () => {
  if (currentQuestuonIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
