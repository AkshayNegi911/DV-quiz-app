import { useContext } from "react";
import { QuizContext } from "../Context/QuizHolder";

export default function Start() {
  const { setStart } = useContext(QuizContext);

  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '20vh',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '15px 0',
    backgroundColor: '#3498db',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const creditStyle = {
    fontSize: '12px',
    color: '#777',
    marginTop: '20px',
  };



  return (
    <div style={containerStyle} >
      <h1>Data Visualization Quiz</h1>
      <p>Test your knowledge on data visualization concepts and techniques!</p>
      <button
        onClick={() => setStart(true)}
        style={buttonStyle}
      >
        Start
      </button>
    </div>
  );
}
