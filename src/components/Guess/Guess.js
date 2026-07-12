import React from 'react';
import { checkGuess } from '../../game-helpers'

function Cell({ status, children }) {

  return (
    <span className={`cell ${status}`}>
      {children}
    </span>
  )
}

function Guess({ guessResult, rightAnswer }) {

  const numOfCells = Array.from({ length: 5 })

  return <p className="guess">
    {guessResult ?
      // checkGuess gives an array of the ltters that match the
      // right letter, the ones that are misplaced, and the
      // ones that are wrong
      checkGuess(guessResult, rightAnswer).map(letterObject =>
        <Cell key={Math.random()} status={letterObject.status}>{letterObject.letter}</Cell>
      )
      :
      numOfCells.map(cell => <Cell key={Math.random()}></Cell>)
    }

  </p>;
}

export default Guess;
