import React, { useContext, useState } from "react";
import { Questions } from "../helpers/QustionBank";
import { QuizContext } from "../helpers/Contexts";
export default function Quiz() {
  const { score, setScore, gameState, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    //  alert(score);
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("end");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>

      <div className="options">
        <button onClick={() => setoptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setoptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setoptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setoptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}
