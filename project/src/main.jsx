import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import QuizHolder from "./Context/QuizHolder";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizHolder>
      <App />
    </QuizHolder>
  </React.StrictMode>
);
