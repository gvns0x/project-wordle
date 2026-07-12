import React from 'react';
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED as maxGuesses } from '../../constants'
import { range } from '../../utils'

function GuessResults({ guessResults, rightAnswer }) {

  // Updated the correct row index with the equivalent one from guessResults
  const filledRows = range(maxGuesses).map((row, index) =>
    guessResults[index]
  )

  return (
    <div className="guess-results">
      {filledRows.map((guessResult, index) => <Guess rightAnswer={rightAnswer} key={index} guessResult={guessResult} />)}
    </div>
  );
}

export default GuessResults;
