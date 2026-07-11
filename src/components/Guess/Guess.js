import React from 'react';
import { checkGuess } from '../../game-helpers'

function Guess({ guessResult, answer }) {

  const numOfCells = Array.from({ length: 5 })

  return <p className="guess">
    {guessResult ?
      checkGuess(guessResult, answer).map(letterObject =>
        <span key={Math.random()} className={`cell ${letterObject.status}`}>{letterObject.letter}</span>
      )
      :
      numOfCells.map(cell => <span key={Math.random()} className='cell'></span>)
    }
  </p>;
}

export default Guess;
