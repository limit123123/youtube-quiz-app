import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
export default function MainMenu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    QuizContext
  );
  return (
    <div className="Menu">
      <label>Enter your name:</label>
      <input
        type="text"
        placeholder="aaa"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
