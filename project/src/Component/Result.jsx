import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizHolder";

export default function Result() {
  const { correct, setExit, setStart, quizzes } = useContext(QuizContext);

  const playAgain = () => {
    setExit(false);
    setStart(false);
  };

  const resultContainerStyle = {
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: 'auto',
      marginTop: '20vh',
  };
  
  const resultText = `You answered ${correct} out of ${quizzes.length} questions correctly.`;
  

  return (
    <div style={resultContainerStyle}>
      <h2>Quiz Results</h2>
      <p>{resultText}</p>
      <button
          onClick={playAgain}
           className="border border-orange-500 px-6 py-3 text-xl rounded-lg bg-orange-500 text-gray-900 hover:bg-orange-600 hover:border-orange-600 focus:outline-none focus:border-orange-600 focus:ring focus:ring-orange-300"
      >
        Play again
      </button>
    </div>
  );
}
