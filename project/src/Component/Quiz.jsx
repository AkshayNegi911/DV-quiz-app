import { useContext, useState } from "react";
import { QuizContext } from "../Context/QuizHolder";

export default function Quiz() {
  const [current, setCurrent] = useState(0);

  const questionStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    maxWidth: '60vw',
    margin: 'auto',
    marginTop: '10vh',
  };


  return (
    <div style={questionStyle}>
      <Box current={current} next={setCurrent} />
    </div>
  );
}

const Box = ({ current, next }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
  const [ans, setAns] = useState("");

  const saveHandler = () => {
    if (quizzes[current].correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizzes.length) {
      setExit(true);
    } else {
      next(current + 1);
    }
  };

  const optionsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    width: '100%',
  };

  const optionStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '80%',
    textAlign: 'center',
    backgroundColor: selectedOption === null ? '#3498db' : selectedOption ? '#2ecc71' : '#e74c3c',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={optionsContainerStyle}>
      <div className="p-4 text-2xl">
        {" "}
        {current + 1} {quizzes[current].question}
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Option
          ans={ans}
          setAns={setAns}
          option="a"
          text={quizzes[current].a}
          style={optionStyle}
          onClick={() => handleOptionSelect('notNULL')}
        />
        <Option
          ans={ans}
          setAns={setAns}
          option="b"
          text={quizzes[current].b}
          style={optionStyle}
          onClick={() => handleOptionSelect('notNULL')}
        />
        <Option
          ans={ans}
          setAns={setAns}
          option="c"
          text={quizzes[current].c}
          style={optionStyle}
          onClick={() => handleOptionSelect('notNULL')}
        />
        <Option
          ans={ans}
          setAns={setAns}
          option="d"
          text={quizzes[current].d}
          style={optionStyle}
          onClick={() => handleOptionSelect('notNULL')}
        />
      </div>
      <div className="flex justify-between p-4">
        <div
          className="mx-5 cursor-pointer h-12 px-6 bg-violet-500 text-white rounded-lg flex items-center justify-center"
          onClick={() => setAns("")}
        >
          Reset
        </div>
        <div
          className="mx-5 cursor-pointer h-12 px-6 bg-blue-500 text-white rounded-lg flex items-center justify-center"
          onClick={saveHandler}
        >
          Next
        </div>
        <div
          className="mx-5 cursor-pointer h-12 px-6 bg-pink-500 text-white rounded-lg flex items-center justify-center"
          onClick={() => setExit(true)}
        >
          Exit
        </div>
      </div>
    </div>
  );
};

const Option = ({ ans, setAns, option, text }) => {
  return (
    <div
      className={` border p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
        ans === option
          ? "bg-blue-400 text-white"
          : "hover:bg-blue-400 hover:text-white"
      }`}
      onClick={() => setAns(option)}
    >
      {text}
    </div>
  );
};
