import React from 'react';

function Input({ updateResults, gameStatus }) {
  const [input, setInput] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    updateResults(input);
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={(event) => setInput(event.target.value.toUpperCase())}
        value={input}
        pattern="[A-Z]{5}"
        disabled={gameStatus !== 'running' ? true : false}
        />
    </form>
  )
}

export default Input;
