import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import GuessResults from '../GuessResults/';
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED as maxGuesses } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guessResults, setGuessResults] = React.useState([])
  const [rightAnswer, setRightAnswer] = React.useState(answer)
  const gameEnded = rightAnswer === guessResults[guessResults.length - 1] || guessResults.length === maxGuesses

  console.log(`Answer is ${rightAnswer}`)

  function updateResults(input) {
    setGuessResults(prev => [...prev, input])
  }

  function onRestart() {
    setRightAnswer(sample(WORDS))
    setGuessResults([])
  }

  return <>
    <GuessResults {...{guessResults, rightAnswer}} />
    <Input {...{updateResults, gameEnded}} />
    {gameEnded &&
    <Banner {...{guessResults, rightAnswer, onRestart, maxGuesses}} />}
  </>;
}

export default Game;
