// Letter.js

import React from "react";
import "../styles/Letter.css";

// Letter component represents an individual letter in the word to guess
const Letter = ({ letter, isGuessed, isCorrect }) => {
  return (
    // Container div for the letter with dynamic classes based on the guessed and correct status
    <div
      className={`letter ${isGuessed ? "guessed" : ""} ${
        isCorrect ? "correct" : ""
      }`}
    >
      {/* Display the letter if guessed or correct, otherwise show an underscore */}
      {isGuessed || isCorrect ? letter : "_"}
    </div>
  );
};

export default Letter;
