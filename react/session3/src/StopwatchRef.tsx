import { useState, useRef } from "react"

function StopwatchRef() {

  const [seconds, setSeconds] = useState<number>(0)

  const [isRunning, setIsRunning] = useState<boolean>(false)

  // useRef stores the interval ID without causing re-renders.
  const intervalRef =
    useRef<ReturnType<typeof setInterval> | null>(null)

  function handleStart(): void {

    if (isRunning) return

    setIsRunning(true)

    intervalRef.current = setInterval(() => {

      setSeconds(prev => prev + 1)

    }, 1000)

  }

  function handleStop(): void {

    if (intervalRef.current)

      clearInterval(intervalRef.current)

    setIsRunning(false)

  }

  function handleReset(): void {

    if (intervalRef.current)

      clearInterval(intervalRef.current)

    setIsRunning(false)

    setSeconds(0)

  }

  return (

    <div>

      <p>Time: {seconds}s</p>

      <button
        onClick={handleStart}
        disabled={isRunning}
      >
        Start
      </button>

      <button
        onClick={handleStop}
        disabled={!isRunning}
      >
        Stop
      </button>

      <button
        onClick={handleReset}
      >
        Reset
      </button>

      {/* The interval ID is stored in useRef because it does not affect the UI.
          Updating a ref does not trigger a re-render, making it ideal for timers.
          If state were used instead, every interval ID update would cause an
          unnecessary re-render even though the ID is never displayed. */}

    </div>

  )

}

export default StopwatchRef