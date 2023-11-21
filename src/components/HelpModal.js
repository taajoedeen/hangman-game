// HelpModal.js

import React from "react";
import "../styles/HelpModal.css";

const HelpModal = ({ isOpen, onClose }) => {
  return (
    <div className={`help-modal ${isOpen ? "open" : ""}`}>
      <h1>Hangman Game</h1>
      <h2>Hangman Game Rules</h2>
      <ol>
        <li>Guess the letters to uncover the hidden word.</li>
        <li>Avoid too many incorrect guesses to win.</li>
        <li>Click "Restart" to start a new game.</li>
      </ol>
      <h3>How to Play:</h3>
      <ol>
        <li>Click the letters on the keyboard to make a guess.</li>
        <li>Incorrect guesses will progress the hangman figure.</li>
        <li>Try to guess the word before the hangman is complete!</li>
      </ol>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HelpModal;
