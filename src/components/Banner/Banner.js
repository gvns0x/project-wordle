import React from 'react';

function Banner({ guessResults, rightAnswer, onRestart, maxGuesses }) {
  const gameWon = rightAnswer === guessResults[guessResults.length - 1] && guessResults.length <= maxGuesses

  return (
    <div
      className={`banner ${gameWon ? "happy" : "sad"}`}
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      {gameWon ?
        <p>
          <strong>Congratulations!</strong> Got it in {" "}
          <strong>{guessResults.length} guess{guessResults.length === 1 ? "" : "es"}</strong>.
        </p>
        :
        <p>Sorry, the correct answer is <strong>{rightAnswer}</strong>.</p>
      }
      <button
        onClick={onRestart}
        style={{
          backgroundColor: "rgba(255,255,255,.2)",
          padding: "4px 12px",
          borderRadius: "12px"
        }}>
        Restart
      </button>
    </div>
  );
}

export default Banner;