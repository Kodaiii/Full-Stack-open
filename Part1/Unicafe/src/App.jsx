import { useState } from 'react'


const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}> {text} </button>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good - bad / all)
    const positive = (good / all) * 100 + " %"
    if (all === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>statistics</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>good</td>
                        <td>{good}</td>
                    </tr>
                    <tr>
                        <td>neutral</td>
                        <td>{neutral}</td>
                    </tr>
                    <tr>
                        <td>bad</td>
                        <td>{bad}</td>
                    </tr>
                    <tr>
                        <td>all</td>
                        <td>{all}</td>
                    </tr>
                    <tr>
                        <td>average</td>
                        <td>{average}</td>
                    </tr>
                    <tr>
                        <td>positive</td>
                        <td>{positive}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text="good"/>
            <Button onClick={handleNeutralClick} text="neutral"/>
            <Button onClick={handleBadClick} text="bad"/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App