import React from 'react';
import { checkGuess } from '../../game-helpers'

function Guess({ guessResult, answer }) {

  const numOfCells = Array.from({ length: 5 })

  console.log(answer)

  return <p className="guess">
    {guessResult ?
      [...guessResult].map(letter =>
        <span className="cell">{letter}</span>
      ) :
      numOfCells.map(block => <span key={Math.random()} className='cell'></span>)
    }
  </p>;
}

export default Guess;
