import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import GuessResults from '../GuessResults/';
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED as numOfGuesses } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([])
  const [rightAnswer, setRightAnswer] = React.useState(answer)
  console.info({rightAnswer})
  const gameEnded = answer === guessResults[guessResults.length - 1] || guessResults.length === 6

  function updateResults(input) {
    const results = [...guessResults]
    setGuessResults([...results, input])
  }

  function onRestart() {
    setRightAnswer(sample(WORDS))
  }
  
  console.log(`Game ended: ${gameEnded}`)

  return <>
    <GuessResults {...{guessResults, answer}} />
    <Input {...{updateResults, gameEnded}} />
    {gameEnded &&
    <Banner {...{guessResults, answer}} />}
  </>;
}

export default Game;
