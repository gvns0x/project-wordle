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
  
  // checkGuess gives an array of the ltters that match the
  // right letter, the ones that are misplaced, and the
  // ones that are wrong
  const checkResult = checkGuess(guessResult, rightAnswer)

  return <p className="guess">
    {numOfCells.map((cell, index) =>
      <Cell
        status={checkResult ? checkResult[index].status : null}
      >
        {checkResult ? checkResult[index].letter : null}
      </Cell>
    )}
  </p>;
}

export default Guess;
