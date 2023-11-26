// App.js

import React, { useState } from "react";
import Hangman from "./components/Hangman";
import GameBoard from "./components/GameBoard";
import HelpModal from "./components/HelpModal";
import "./App.css";

// Words the user has to guess
const words = [
  "hangman",
  "react",
  "javascript",
  "developer",
  "coding",
  "challenge",
];

// Function to get a random word from the list
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

// Main App component
const App = () => {
  // State variables for managing the game state
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);

  // Handler for processing letter guesses
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

  // Function to restart the game
  const restartGame = () => {
    setWordToGuess(getRandomWord());
    setGuessedLetters([]);
    setCorrectLetters([]);
    setIncorrectGuesses(0);
  };

  // Function to open the help modal
  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  // Function to close the help modal
  const closeHelpModal = () => {
    setHelpModalOpen(false);
  };

  // Function to display the game result message
  const gameResultMessage = () => {
    const uniqueWordLetters = new Set(wordToGuess.split(""));
    const correctUniqueLetters = new Set(correctLetters);

    if (correctUniqueLetters.size === uniqueWordLetters.size) {
      return <p className="win-message">Congratulations! You won!</p>;
    } else if (incorrectGuesses >= 6) {
      return (
        <p className="loss-message">
          Sorry! You lost. The word was {wordToGuess}.
        </p>
      );
    } else {
      return null;
    }
  };

  // Render the main application
  return (
    <div className="app-container">
      {/* Game title */}
      <h1>Hangman Game</h1>

      {/* Hangman figure display */}
      <Hangman incorrectGuesses={incorrectGuesses} />

      {/* Game board display */}
      <GameBoard
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        correctLetters={correctLetters}
        onLetterClick={handleGuess}
        incorrectGuesses={incorrectGuesses}
      />

      {/* Display game result message */}
      {gameResultMessage()}

      {/* Restart button */}
      <button onClick={restartGame}>Restart</button>

      {/* Help button to open the help modal */}
      <button onClick={openHelpModal}>Help</button>

      {/* Help modal */}
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
