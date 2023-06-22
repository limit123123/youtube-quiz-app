import "./styles.css";
import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import EndScreen from "./components/EndScreen";
import Quiz from "./components/Quiz";
import { QuizContext } from "./helpers/Contexts";

export default function App() {
  const [gameState, setGameState] = useState("menu");

  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App </h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}
