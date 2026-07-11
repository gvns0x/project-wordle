import React from 'react';

function Banner({ guessResults, answer }) {
  const gameWon = answer === guessResults[guessResults.length - 1] && guessResults.length <= 6

  return (
    <div className={`banner ${gameWon ? "happy" : "sad"}`}>
      {gameWon ?
        <p>
          <strong>Congratulations!</strong> Got it in {" "}
          <strong>{guessResults.length} guesses</strong>.
        </p>
        :
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      }

    </div>
  );
}

export default Banner;