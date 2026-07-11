import React from 'react';

function Guess( {guessResult} ) {

  const numOfBlocks = Array.from({ length: 5 }, (_, index) => index + 1)

  return <p className="guess">
    {guessResult ?
    [...guessResult].map(letter =>
      <span className="cell">{letter}</span>
    ) :
      numOfBlocks.map(block => <span className='cell'></span>) 
    }
  </p>;
}

export default Guess;
