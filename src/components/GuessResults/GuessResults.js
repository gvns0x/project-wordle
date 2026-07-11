import React from 'react';
import Guess from '../Guess'
import numOfGuesses from '../../constants'

function GuessResults({ guessResults }) {



  return (
    <div className="guess-results">
      {guessResults.map(guessResult => <Guess guessResult={guessResult}/>)}
    </div>
  );
}

export default GuessResults;
