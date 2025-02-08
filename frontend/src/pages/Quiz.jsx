import React, { useState } from "react";
import "./Page.css";

function Quiz() {
  const questions = [
    { question: "What is a stock?", answer: "A share in a company" },
    { question: "What is diversification?", answer: "Spreading investments" },
  ];

  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="container">
      <h1>Investment Quiz</h1>
      <div className="quiz-card">
        <p>{questions[current].question}</p>
        {showAnswer && <p className="answer">Answer: {questions[current].answer}</p>}
        <button onClick={() => setShowAnswer(!showAnswer)}>Show Answer</button>
        <button onClick={() => setCurrent((current + 1) % questions.length)}>Next</button>
      </div>
    </div>
  );
}

export default Quiz;
