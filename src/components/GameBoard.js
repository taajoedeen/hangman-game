import React from "react";
import Letter from "./Letter";
import "../styles/GameBoard.css";

const GameBoard = ({ wordToGuess, guessedLetters, correctLetters }) => {
  return (
    <div className="game-board-container">
      {wordToGuess.split("").map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
          isGuessed={guessedLetters.includes(letter)}
          isCorrect={correctLetters.includes(letter)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
