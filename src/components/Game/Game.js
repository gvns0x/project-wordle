import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import GuessResults from '../GuessResults/';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([])

  function updateResults(input) {
    const results = [...guessResults]
    setGuessResults([...results, input])
  }

  return <>
  <GuessResults guessResults={guessResults} answer={answer}/>
  <Input updateResults={updateResults}/>
  </>;
}

export default Game;
