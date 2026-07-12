import React from 'react';
import { checkGuess } from '../../game-helpers'

function Guess({ guessResult, rightAnswer }) {

  const numOfCells = Array.from({ length: 5 })

  return <p className="guess">
    {guessResult ?
    // checkGuess gives an array of the ltters that match the
    // right letter, the ones that are misplaced, and the
    // ones that are wrong
      checkGuess(guessResult, rightAnswer).map(letterObject =>
        <span key={Math.random()} className={`cell ${letterObject.status}`}>{letterObject.letter}</span>
      )
      :
      numOfCells.map(cell => <span key={Math.random()} className='cell'></span>)
    }
  </p>;
}

export default Guess;
