
const questions = [
  {
    question: "Tanggal jadian kita?",
    choices: ["12 Februari", "14 Februari", "1 Januari", "25 Desember"],
    answer: 1
  },
  {
    question: "Makanan favorit kamu?",
    choices: ["Bakso", "Sushi", "Mie Ayam", "Pizza"],
    answer: 0
  },
  {
    question: "Tempat kencan pertama kita?",
    choices: ["Mall", "Taman", "Cafe", "Pantai"],
    answer: 2
  },
  {
    question: "Warna favorit kamu?",
    choices: ["Merah", "Pink", "Biru", "Hitam"],
    answer: 1
  },
  {
    question: "Aku sayang kamu?",
    choices: ["Sedikit", "Biasa aja", "Selalu dan terus", "Gak juga"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const div = document.createElement("div");
    div.className = "choice";
    div.textContent = choice;
    div.onclick = () => selectAnswer(index);
    choicesEl.appendChild(div);
  });
}

function selectAnswer(index) {
  const correct = questions[currentQuestion].answer;
  if (index === correct) {
    score++;
  }
  document.querySelectorAll(".choice").forEach(choice => {
    choice.style.pointerEvents = "none";
    if (choice.textContent === questions[currentQuestion].choices[correct]) {
      choice.style.backgroundColor = "#caffbf";
    } else {
      choice.style.backgroundColor = "#ffadad";
    }
  });
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = score;
}

showQuestion();
