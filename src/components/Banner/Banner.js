import React from 'react';

function Banner({ guessResults, rightAnswer, onRestart }) {
  const gameWon = rightAnswer === guessResults[guessResults.length - 1] && guessResults.length <= 6

  return (
    <div className={`banner ${gameWon ? "happy" : "sad"}`}>
      {gameWon ?
        <p>
          <strong>Congratulations!</strong> Got it in {" "}
          <strong>{guessResults.length} guesses</strong>.
        </p>
        :
        <p>Sorry, the correct answer is <strong>{rightAnswer}</strong>.</p>
      }
      <button onClick={onRestart} style={{backgroundColor:"#ffffff", padding: "8px"}}>Restart</button>
    </div>
  );
}

export default Banner;