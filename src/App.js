import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  return (
  <div>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {good + neutral + bad}</p>
      <p>average: {(good - bad) / (good + neutral + bad)}</p>
      <p>positive: {(good / (good + neutral + bad)) * 100}%</p>
  </div>
)}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button> 
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
