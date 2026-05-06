import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

// App component renders a digital clock showing the current date and time
function App() {
  // State holds the current Date, updated every second
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Update the clock every 1000ms
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="clock-container">
      <h1 className="clock-title">Color Clock</h1>
      {/* Display formatted time using date-fns */}
      <p className="clock-time">{format(currentTime, 'hh:mm:ss a')}</p>
      {/* Display formatted date using date-fns */}
      <p className="clock-date">{format(currentTime, 'EEEE, MMMM do yyyy')}</p>
    </div>
  )
}

export default App
