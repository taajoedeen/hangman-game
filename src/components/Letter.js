import React from "react";
import "../styles/Letter.css";

const Letter = ({ letter, isGuessed, isCorrect }) => {
  return (
    <div
      className={`letter ${isGuessed ? "guessed" : ""} ${
        isCorrect ? "correct" : ""
      }`}
    >
      {isGuessed || isCorrect ? letter : "_"}
    </div>
  );
};

export default Letter;
