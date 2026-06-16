const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "HyperLink Text Mode"],
    answer: 0  // index of correct option
  },
  {
    question: "Which keyword declares a variable in JS?",
    options: ["var", "let", "Both var and let"],
    answer: 2
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Syntax"],
    answer: 1
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;
  const q = questions[currentIndex];

  document.getElementById("progress").textContent =
    `Question ${currentIndex + 1} of ${questions.length}`;
  document.getElementById("question").textContent = q.question;
  document.getElementById("feedback").textContent = "";
  document.getElementById("nextBtn").style.display = "none";

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(function(option, i) {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", function() {
      selectAnswer(i);
    });
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (answered) return; // prevent clicking twice
  answered = true;

  const correct = questions[currentIndex].answer;
  const feedback = document.getElementById("feedback");

  if (index === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `❌ Wrong! Answer: ${questions[currentIndex].options[correct]}`;
    feedback.style.color = "red";
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("finalScore").textContent =
      `You scored ${score} out of ${questions.length}`;
  }
}

function restart() {
  currentIndex = 0;
  score = 0;
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";
  loadQuestion();
}

// Start the quiz on page load
loadQuestion();