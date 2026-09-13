
import React, { useEffect, useState } from "react";

function QuizApp() {
  const questions = [
    {
      id: 1,
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript Extension",
        "JSON XML",
      ],
      answer: "JavaScript XML",
    },

    {
      id: 2,
      question: "Which hook is used to manage state?",
      options: [
        "useEffect",
        "useState",
        "useRef",
        "useContext",
      ],
      answer: "useState",
    },

    {
      id: 3,
      question: "Which hook is commonly used for side effects?",
      options: [
        "useState",
        "useMemo",
        "useEffect",
        "useReducer",
      ],
      answer: "useEffect",
    },

    {
      id: 4,
      question: "Which method is used to render a list in React?",
      options: [
        "filter()",
        "reduce()",
        "map()",
        "find()",
      ],
      answer: "map()",
    },

    {
      id: 5,
      question: "What is used to give a React element a unique identity?",
      options: [
        "id",
        "key",
        "name",
        "ref",
      ],
      answer: "key",
    },
  ];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [score, setScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(30);

  const [quizFinished, setQuizFinished] =
    useState(false);

  // Timer
  useEffect(() => {
    if (quizFinished) {
      return;
    }

    if (timeLeft === 0) {
      finishQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, quizFinished]);

  // Select an answer
  function handleSelectAnswer(answer) {
    setSelectedAnswer(answer);
  }

  // Move to the next question
  function handleNext() {
    if (!selectedAnswer) {
      return;
    }

    const currentAnswer =
      questions[currentQuestion].answer;

    if (selectedAnswer === currentAnswer) {
      setScore((previousScore) => previousScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
      return;
    }

    setCurrentQuestion(
      (previousQuestion) => previousQuestion + 1
    );

    setSelectedAnswer("");
  }

  // Finish quiz
  function finishQuiz() {
    setQuizFinished(true);
  }

  // Restart quiz
  function handleRestart() {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setTimeLeft(30);
    setQuizFinished(false);
  }

  // Quiz finished screen
  if (quizFinished) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="mx-auto max-w-xl rounded-lg bg-white p-8 text-center shadow">
          <h1 className="mb-4 text-3xl font-bold">
            Quiz Finished!
          </h1>

          <p className="mb-6 text-xl">
            Your score:
          </p>

          <p className="mb-6 text-4xl font-bold text-blue-500">
            {score} / {questions.length}
          </p>

          <button
            onClick={handleRestart}
            className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow">

        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            React Quiz
          </h1>

          <div
            className={`rounded-lg px-4 py-2 font-bold ${
              timeLeft <= 10
                ? "bg-red-100 text-red-600"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            Time: {timeLeft}s
          </div>
        </div>

        {/* QUESTION NUMBER */}
        <p className="mb-3 text-gray-500">
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </p>

        {/* QUESTION */}
        <h2 className="mb-6 text-2xl font-bold">
          {question.question}
        </h2>

        {/* ANSWERS */}
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() =>
                handleSelectAnswer(option)
              }
              className={`w-full rounded-lg border p-4 text-left transition ${
                selectedAnswer === option
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="mt-6 w-full rounded-lg bg-blue-500 px-5 py-3 font-bold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default QuizApp;
