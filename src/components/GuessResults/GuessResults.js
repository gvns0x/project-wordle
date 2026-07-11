import React from 'react';
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED as numOfGuesses } from '../../constants'

function GuessResults({ guessResults }) {

  // Creates an empty arrow with {numOfGuesses} number of rows
  const rowsSetup = Array.from({ length: numOfGuesses })

  // Updated the correct row index with the equivalent one from guessResults
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
