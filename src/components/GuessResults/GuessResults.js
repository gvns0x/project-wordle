import React from 'react';
import Guess from '../Guess'

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
    </div>
  );
}

export default GuessResults;
