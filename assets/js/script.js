document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const messageDisplay = document.getElementById('message');
    const errorDisplay = document.getElementById('errorDisplay');

    const correctAnswers = {
        q1: 'a', // Fox Mulder
        q2: 'a', // 1993
        q3: 'a', // He believes they exist
        q4: 'b', // Chris Carter
        q5: 'd', // Krycek
        q6: 'c', // The Cigarette Smoking Man
        q7: 'a', // Samantha Mulder
        q8: 'b', // Washington, D.C.
        q9: 'a', // Dana Scully
        q10: 'c', // "I want to believe"
    };

    submitButton.addEventListener('click', function (event) {
        let score = 0;
        const totalQuestions = 10;
        let unanswered = false;

        // Clear previous messages and score
        errorDisplay.classList.remove('show');
        errorDisplay.textContent = ''; 
        scoreDisplay.textContent = '';
        messageDisplay.textContent = '';

        // Loop through each question to check answers
        for (let i = 1; i <= totalQuestions; i++) {
            const question = document.querySelector(`input[name="q${i}"]:checked`);
            if (!question) {
                unanswered = true;
                break;
            }
            // Check if the selected answer is correct
            if (question.value === correctAnswers[`q${i}`]) {
                score++;
            }
        }

        // Display error message if not all questions are answered
        if (unanswered) {
            errorDisplay.textContent = "Please select one answer per question.";
            errorDisplay.classList.add('show'); // Make error visible using the CSS 'show' class
            return; // Prevent further execution
        }

        // Calculate and display the score if all questions are answered
        const percentage = Math.round((score / totalQuestions) * 100); // Rounded to nearest integer
        scoreDisplay.textContent = `Your score: ${percentage}%`;

        // Display message based on score
        if (percentage < 70) {
            scoreDisplay.classList.add('red');
            scoreDisplay.classList.remove('green');
            messageDisplay.textContent = "Sorry! Watch more X-Files";
            messageDisplay.style.color = 'red';
        } else {
            scoreDisplay.classList.add('green');
            scoreDisplay.classList.remove('red');
            messageDisplay.textContent = "Awesome! You are a believer!";
            messageDisplay.style.color = 'green';
        }
    });
});
