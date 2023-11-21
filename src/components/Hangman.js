import React from "react";
import step0 from "../assets/hangman-steps/step0.png";
import step1 from "../assets/hangman-steps/step1.png";
import step2 from "../assets/hangman-steps/step2.png";
import step3 from "../assets/hangman-steps/step3.png";
import step4 from "../assets/hangman-steps/step4.png";
import step5 from "../assets/hangman-steps/step5.png";
import step6 from "../assets/hangman-steps/step6.png";

const Hangman = ({ incorrectGuesses }) => {
  const stepImages = [
    step0,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6 /* ... other steps */,
  ];

  // Ensure the index is between 0 and 6
  const index = Math.min(incorrectGuesses, 6);
  const imageUrl = stepImages[index];

  return (
    <div className="hangman-container">
      <img src={imageUrl} alt={`Hangman step ${incorrectGuesses}`} />
    </div>
  );
};

export default Hangman;
