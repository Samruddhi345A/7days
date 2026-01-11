import React from 'react'
import { useEffect } from 'react'

function App() {
  const [isRunning, setIsRunning] = React.useState(true)
  const [timeLeft, setTimeLeft] = React.useState(1500)
  useEffect(() => {
    if (!isRunning) {
      return
    }
    if (isRunning && timeLeft > 0) {
      const timerid = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerid)
            setIsRunning(false);
            return 0
          } else {
            return prev - 1
          }
        })
      }, 1000)
    }


  }, [isRunning])

  return (
    <div>
      <h1>Focus Timer</h1>
      {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={() => setTimeLeft(1500)}>Reset</button>
      </div>
    </div>
  )
}

export default App