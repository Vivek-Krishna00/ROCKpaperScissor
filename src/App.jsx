import { useState } from 'react'


function App() {
  const [round, setRound] = useState(0)
  const [winner,setWinner] = useState("")
  const [userMove, setUserMove] = useState("")
  const [compScore, setCompScore] = useState(0)
  const [userScore, setUserScore] = useState(0)
  const [compMove, setCompMove] = useState("")
  const [history, setHistory] = useState([])
  const [streak,setStreak] = useState(0)
  let emojiMove = {"Rock":"🪨" , "Paper":"📄" , "Scissor":"✂️"}
  const handleClick = (a) => {
    let result = ""
    setUserMove(a)
    let compNumb = Math.random()
    let compChoice = ""
    if (compNumb <= 0.33) {
      compChoice = "Rock"
    } else if (compNumb <= 0.66) {
      compChoice = "Paper"
    } else {
      compChoice = "Scissor"
    }
    setCompMove(compChoice)
    if (a === "Rock" && compChoice === "Paper") {
      setCompScore(compScore => compScore + 1)
      setWinner("CPU Won")
      result="CPU Won"
      setStreak(0)
      
    } else if (a === "Rock" && compChoice === "Scissor") {
      setUserScore(userScore => userScore + 1)
      setWinner("You Won")
      result="You Won"
      setStreak(streak => streak+1)
      
    } else if (a === "Paper" && compChoice === "Scissor") {
      setCompScore(compScore => compScore + 1)
      setWinner("CPU Won")
      result="CPU Won"
      setStreak(0)
      
    } else if (a === "Paper" && compChoice === "Rock") {
      setUserScore(userScore => userScore + 1)
      setWinner("You Won")
      result="You Won"
      setStreak(streak => streak+1)
      
    } else if (a === "Scissor" && compChoice === "Rock") {
      setCompScore(compScore => compScore + 1)
      setWinner("CPU Won")
      result="CPU Won"
      setStreak(0)
      
    } else if (a === "Scissor" && compChoice === "Paper") {
      setUserScore(userScore => userScore + 1)
      setWinner("You Won")
      result="You Won"
      setStreak(streak => streak+1)
      
    }else{
      setWinner("It's Tie")
      setStreak(0)
      result = "It's Tie"
    }
    setRound(round+1)
    
    setHistory(history => [
    ...history,
    {
      user: a,
      comp: compChoice,
      result: result
    }
    ])
  }
  let handleClick1 = () =>{
    setRound(0)
    setCompScore(0)
    setUserScore(0)
    setUserMove("")
    setCompMove("")
    setWinner("")
    setHistory([])
    setStreak(0)
  }
  return (
    <div>
      <h1>Rounds:{round}</h1>
      <h1>CPU : You</h1>
      <h2> {emojiMove[compMove]}:{emojiMove[userMove]}</h2>
      <h1>Score:-  {compScore}:{userScore}</h1>
      <button onClick={() => handleClick("Rock")}>🪨</button>
      <button onClick={() => handleClick("Paper")}>📄</button>
      <button onClick={() => handleClick("Scissor")}>✂️</button>
      <br />
      <br />
      <button onClick={handleClick1}>Reset</button>
      <br />
      <h1>Streak: {streak}</h1>
      <br />
      <h1>Result: {winner}</h1>
      <br />
      <br />
      <div>
        <h2>History</h2>
        {history.map((item, index) => (
        <div key={index}>
          {emojiMove[item.comp]} : {emojiMove[item.user]} : {item.result}
        </div>
        ))}
      </div>

    </div>
  )
}

export default App