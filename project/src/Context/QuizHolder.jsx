import { useState } from "react";
import { createContext } from "react";

const QuizContext = createContext();

const quizzes = [
  {
    question:
      "What is the primary purpose of data visualization?",
    a: "To confuse the audience",
    b: "To communicate information effectively",
    c: "To hide data",
    d: "To make data unreadable",
    correct: "b",
  },
  {
    question:
      "Which type of chart is best suited for showing the distribution of a single numerical variable?",
    a: "Bar chart",
    b: "Pie chart",
    c: "Scatter plot",
    d: "Histogram",
    correct: "d",
  },
  {
    question:
      `What does the term "heatmap" commonly represent in data visualization?`,
    a: "A visual representation of data using colors",
    b: "A chart with bars",
    c: "A chart showing proportions in a circle",
    d: "A 3D scatter plot",
    correct: "a",
  },
  {
    question: "Which data visualization technique is effective for comparing values across different categories over time?",
    a: "Scatter plot",
    b: "Line chart",
    c: "Box plot",
    d: "Bubble chart",
    correct: "b",
  },
  {
    question:
      "In a line chart, what does the x-axis typically represent?",
    a: "Categories or groups",
    b: "Time or continuous variable",
    c: "Frequency or count",
    d: "Distribution of data",
    correct: "b",
  },
  {
    question:
      "What is the purpose of a bubble chart?",
    a: "To show the distribution of a single variable.",
    b: "To compare values across different categories.",
    c: "To display relationships between three variables.",
    d: "To represent hierarchical data.",
    correct: "c",
  },
  {
    question:
      "Which color scheme is often recommended for better accessibility in data visualizations?",
    a: "Monochromatic",
    b: "Rainbow",
    c: "Random",
    d: "Neon",
    correct: "a",
  },
  {
    question:
      "What is a choropleth map commonly used for in data visualization?",
    a: "Showing the geographic distribution of data .",
    b: "Representing relationships between variables .",
    c: "Displaying hierarchical structures .",
    d: "Visualizing connections between nodes .",
    correct: "a",
  },
  {
    question:
      "Which type of chart is useful for displaying the parts of a whole?",
    a: "Line chart",
    b: "Scatter plot",
    c: "Pie chart",
    d: "Radar chart",
    correct: "c",
  },
  {
    question:
      "In a bar chart, what does the length of the bar typically represent?",
    a: "Time",
    b: "Frequency or count",
    c: "Geographic location",
    d: "Relationship between variables",
    correct: "d",
  },
];

export default function QuizHolder(props) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  return (
    <QuizContext.Provider
      value={{
        start,
        exit,
        setStart,
        setExit,
        quizzes,
        correct,
        setCorrect,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}

export { QuizContext };
