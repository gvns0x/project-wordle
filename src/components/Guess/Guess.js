import React from 'react';

function Guess({ guessResult }) {

  const numOfCells = Array.from({ length: 5 })

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
