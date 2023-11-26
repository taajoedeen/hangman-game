// HelpModal.js

import React from "react";
import "../styles/HelpModal.css";

// HelpModal component displays information about the rules and instructions for the Hangman game
const HelpModal = ({ isOpen, onClose }) => {
  return (
    // Conditional rendering of the modal based on the 'isOpen' prop
    <div className={`help-modal ${isOpen ? "open" : ""}`}>
      {/* Modal title */}
      <h1>Hangman Game</h1>

      {/* Section with Hangman Game Rules */}
      <h2>Hangman Game Rules</h2>
      <ol>
        <li>Guess the letters to uncover the hidden word.</li>
        <li>Avoid too many incorrect guesses to win.</li>
        <li>Click "Restart" to start a new game.</li>
      </ol>

      {/* Section with instructions on how to play */}
      <h3>How to Play:</h3>
      <ol>
        <li>Click the letters on the keyboard to make a guess.</li>
        <li>Incorrect guesses will progress the hangman figure.</li>
        <li>Try to guess the word before the hangman is complete!</li>
      </ol>

      {/* Close button to close the modal */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HelpModal;
