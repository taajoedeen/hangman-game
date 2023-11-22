// GameBoard.js

import React from "react";
import Letter from "./Letter";
import "../styles/GameBoard.css";

// New KeyboardButton component
const KeyboardButton = ({ letter, onClick, isChosen }) => {
  return (
    <button
      className={`keyboard-button ${isChosen ? "chosen" : ""}`}
      onClick={() => onClick(letter)}
      disabled={isChosen}
    >
      {letter}
    </button>
  );
};

const GameBoard = ({
  wordToGuess,
  guessedLetters,
  correctLetters,
  onLetterClick,
  incorrectGuesses,
}) => {
  // Generate the alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="game-board-container">
      <div className="keyboard">
        {alphabet.split("").map((letter) => (
          <KeyboardButton
            key={letter}
            letter={letter}
            onClick={onLetterClick}
            isChosen={guessedLetters.includes(letter)}
          />
        ))}
      </div>
      <div className="word-container">
        {wordToGuess.split("").map((letter, index) => (
          <Letter
            key={letter + index}
            letter={letter}
            isGuessed={guessedLetters.includes(letter)}
            isCorrect={correctLetters.includes(letter)}
          />
        ))}
      </div>
      <p className="guesses-left">
        Guesses left: {Math.max(0, 6 - incorrectGuesses)}
      </p>
    </div>
  );
};

export default GameBoard;
