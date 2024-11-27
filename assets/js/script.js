const quizData = [
    {
        question: "Who is the lead character in The X-Files?",
        options: ["Fox Mulder", "Dana Scully", "John Doggett", "Walter Skinner"],
        answer: "Fox Mulder"
    },
    {
        question: "What year did The X-Files first air?",
        options: ["1993", "1994", "1995", "1996"],
        answer: "1993"
    },
    {
        question: "What is Fox Mulder's nickname?",
        options: ["Spooky", "Ghost", "Agent X", "Shadow"],
        answer: "Spooky"
    },
    {
        question: "What is Dana Scully's profession before joining The X-Files?",
        options: ["Pathologist", "Physicist", "FBI Profiler", "Medical Doctor"],
        answer: "Medical Doctor"
    },
    {
        question: "What is the name of Mulder's sister, whose disappearance drives much of his work?",
        options: ["Samantha", "Melissa", "Emily", "Sarah"],
        answer: "Samantha"
    },
    {
        question: "What government agency is primarily involved in covering up extraterrestrial activity in the show?",
        options: ["The Syndicate", "The CIA", "The NSA", "The Pentagon"],
        answer: "The Syndicate"
    },
    {
        question: "What is the name of the recurring character who provides Mulder with secret information?",
        options: ["Deep Throat", "X", "The Smoking Man", "Mr. Y"],
        answer: "Deep Throat"
    },
    {
        question: "What is the iconic tagline of The X-Files?",
        options: ["The Truth Is Out There", "Trust No One", "We Are Not Alone", "Believe the Unbelievable"],
        answer: "The Truth Is Out There"
    },
    {
        question: "Which character replaced Fox Mulder as a lead in later seasons?",
        options: ["John Doggett", "Walter Skinner", "Alex Krycek", "The Smoking Man"],
        answer: "John Doggett"
    },
    {
        question: "What is the name of the movie released in 1998 that continues The X-Files story?",
        options: ["Fight the Future", "The X-Files: The Truth", "Beyond the Bureau", "I Want to Believe"],
        answer: "Fight the Future"
    }
];

const quizContainer = document.getElementById("quiz-container");

// Dynamically render questions
quizData.forEach((data, index) => {
    const questionWrapper = document.createElement("article");
    questionWrapper.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${data.question}`;
    questionWrapper.appendChild(questionText);

    data.options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="q${index}" value="${option}">
            ${option}
        `;
        questionWrapper.appendChild(label);
    });

    quizContainer.appendChild(questionWrapper);
});

// Submit button functionality
document.getElementById("submit").addEventListener("click", () => {
    let score = 0;
    let allAnswered = true;

    quizData.forEach((data, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (!selected) {
            allAnswered = false;
        } else if (selected.value === data.answer) {
            score++;
        }
    });

    const errorDisplay = document.getElementById("errorDisplay");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const messageDisplay = document.getElementById("message");

    if (!allAnswered) {
        errorDisplay.textContent = "Answer all questions. Try again!";
        errorDisplay.style.display = "block";
    } else {
        errorDisplay.style.display = "none";
        scoreDisplay.textContent = `Score: ${score} / ${quizData.length}`;
        messageDisplay.textContent = score === quizData.length
            ? "Perfect! You're an X-Files expert!"
            : "Keep trying! The truth is out there.";
    }
});
