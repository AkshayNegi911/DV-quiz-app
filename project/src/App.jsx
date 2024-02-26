import { useContext } from "react";
import { QuizContext } from "./Context/QuizHolder";
// import DynamicBackground from "./Component/DynamicBackground"; // Import DynamicBackground component
import Quiz from "./Component/Quiz";
import Start from "./Component/Start";
import Result from "./Component/Result";

function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <>
      <div className="z-1">
        {exit === false ? (
          <>{start === true ? <Quiz /> : <Start />}</>
        ) : (
          <Result />
        )}
      </div>
    </>
  );
}

export default App;
