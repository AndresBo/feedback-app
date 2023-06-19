import { useState } from 'react'


const Button = (props) => {
  return (
    <button className='button' onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const Statistics = ({good, neutral, bad}) => {
  const averageScore = ((good - bad) / (good + neutral + bad)).toFixed(2)
  const positivePercentage = ((good / (good + neutral + bad)) * 100).toFixed(0)

  if (good + neutral + bad === 0) {
    return (<p>No feedback given</p>)
  } else {
    return (
    <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {good + neutral + bad}</p>
        <p>average score: {averageScore}</p>
        <p>percentage of positive: {positivePercentage}%</p>
    </div>
    )
  }
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' /> 
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
