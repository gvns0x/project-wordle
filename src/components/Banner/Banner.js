import React from 'react';

function Banner({ guessResults, rightAnswer, onRestart, maxGuesses, gameStatus }) {

  return (
    <div
      className={`banner ${gameStatus === 'won' ? "happy" : "sad"}`}
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      {gameStatus === 'won' ?
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