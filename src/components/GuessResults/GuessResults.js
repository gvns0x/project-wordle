import React from 'react';
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED as numOfGuesses } from '../../constants'

function GuessResults({ guessResults }) {

  const rowsSetup = Array.from({ length: numOfGuesses })
  const filledRows = rowsSetup.map((row, index) =>
    rowsSetup[index] = guessResults[index]
  )

  return (
    <div className="guess-results">
      {filledRows.map(guessResult => <Guess guessResult={guessResult} />)}
    </div>
  );
}

export default GuessResults;
