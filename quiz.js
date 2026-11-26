// 1. Create an array of objects to store the quiz questions and answers
var quizQuestions = [
  {
    question: "What is the capital of France?",
    answer: "paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "mars"
  },
  {
    question: "What is 5 + 7?",
    answer: "12"
  },
  {
    question: "Which language is used for web development?",
    answer: "javascript"
  },
  {
    question: "How many days are in a week?",
    answer: "7"
  }
];

// 2. Define a function to run the quiz
function runQuiz() {
  // 3. Initialize the score to 0
  var score = 0;

  // 4. Loop through all the questions in the array
  for (var i = 0; i < quizQuestions.length; i++) {
    // 5. Ask the user for their answer using prompt()
    var userAnswer = prompt(quizQuestions[i].question);

    // Check if the user clicked "Cancel" (which makes userAnswer null)
    if (userAnswer !== null) {
      // 6. Clean up the input (lowercase and remove extra spaces)
      var cleanAnswer = userAnswer.toLowerCase().trim();
      var correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

      // 7. Compare the user's answer with the correct answer
      if (cleanAnswer === correctAnswer) {
        score = score + 1; // Increase score by 1
        // 8. Show immediate feedback
        alert("Correct!");
      } else {
        alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
      }
    } else {
      alert("You skipped this question. The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // 9. Display the final score at the end
  alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// 10. Call the function to start the quiz
runQuiz();
