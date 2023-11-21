// App.js

import React, { useState } from "react";
import Hangman from "./components/Hangman";
import GameBoard from "./components/GameBoard";
import HelpModal from "./components/HelpModal";
import "./App.css";

const words = [
  "hangman",
  "react",
  "javascript",
  "developer",
  "coding",
  "challenge",
];

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);

      if (wordToGuess.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      } else {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  const restartGame = () => {
    setWordToGuess(getRandomWord());
    setGuessedLetters([]);
    setCorrectLetters([]);
    setIncorrectGuesses(0);
  };

  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setHelpModalOpen(false);
  };

  return (
    <div className="app-container">
      <h1>Hangman Game</h1>
      <Hangman incorrectGuesses={incorrectGuesses} />
      <GameBoard
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        correctLetters={correctLetters}
      />
      <p>Guess a letter:</p>
      <input
        type="text"
        maxLength="1"
        onChange={(e) => handleGuess(e.target.value.toLowerCase())}
      />
      <button onClick={restartGame}>Restart</button>
      <button onClick={openHelpModal}>Help</button>
      <HelpModal isOpen={isHelpModalOpen} onClose={closeHelpModal}>
        {/* Content for Help Modal */}
        <h2>Hangman Game Rules</h2>
        <ol>
          <li>Guess the letters to uncover the hidden word.</li>
          <li>Avoid too many incorrect guesses to win.</li>
          <li>Click "Restart" to start a new game.</li>
        </ol>
      </HelpModal>
    </div>
  );
};

export default App;
