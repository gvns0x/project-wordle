import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import GuessResults from '../GuessResults/';
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED as maxGuesses } from '../../constants';

function Game() {
  const [guessResults, setGuessResults] = React.useState([])
  const [rightAnswer, setRightAnswer] = React.useState(() => sample(WORDS))
  const [gameStatus, setGameStatus] = React.useState('running')

  console.log(`Answer is ${rightAnswer}`)

  function updateResults(input) {
    
    setGuessResults(prev => [...prev, input])

    const newGuessResults = [...guessResults, input]
    if (newGuessResults.length >= maxGuesses) {
      setGameStatus('lost')
    } else if (rightAnswer === newGuessResults[newGuessResults.length - 1]) {
      setGameStatus('won')
    } else {
      setGameStatus('running')
    }
  }

  function onRestart() {
    setGameStatus('running')
    setRightAnswer(sample(WORDS))
    setGuessResults([])
  }

  return <>
    <GuessResults {...{guessResults, rightAnswer}} />
    <Input {...{updateResults, gameStatus}} />
    {gameStatus !== 'running' &&
    <Banner {...{guessResults, rightAnswer, onRestart, maxGuesses, gameStatus}} />}
    {console.log(gameStatus !== 'running' ? "show banner" : "no banner")}
  </>;
}

export default Game;
