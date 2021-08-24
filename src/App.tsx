import React, { useEffect, useRef, useState } from 'react';
import './App.scss'
function App() {


  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  let [date, setDate] = useState({
    time: new Date().toLocaleTimeString(),
    year: new Date().toLocaleDateString(),
    weekDay: weekDays[new Date().getDay() - 1]
  })
  useEffect(() => {
    const subs = setInterval(() => {
      console.log("change")
      setDate({
        time: new Date().toLocaleTimeString(),
        year: new Date().toLocaleDateString(),
        weekDay: weekDays[new Date().getDay() - 1]
      })
    }, 1000)
    return () => {
      clearInterval(subs)
    }
  }, [])


  return (
    <main className="container">
      <div className="clock">
        <div className="time"> {`${ date.time }`}</div>
        <div className="date">{`${ date.year }, ${ date.weekDay }`}</div>
      </div>

    </main>
  );
}

export default App;
