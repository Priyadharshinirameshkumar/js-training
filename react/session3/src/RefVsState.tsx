import { useState, useRef } from "react"

function RefVsState() {

  // State stores data that updates the UI.
  const [stateCount, setStateCount] = useState<number>(0)

  // Ref stores mutable data without causing a re-render.
  const refCount = useRef<number>(0)

  function incrementState(): void {

    setStateCount(prev => prev + 1)

  }

  function incrementRef(): void {

    refCount.current += 1

    console.log("Ref value:", refCount.current)

  }

  return (

    <div>

      <p>State count (shown in UI): {stateCount}</p>

      <p>Ref count (check console): {refCount.current}</p>

      <button onClick={incrementState}>
        Increment State
      </button>

      <button onClick={incrementRef}>
        Increment Ref
      </button>

      {/* useState updates the UI whenever its value changes, so it is used for
          data that should be displayed. useRef stores values that persist across
          renders without triggering a re-render, making it useful for DOM
          references, timers, and mutable values that do not need to update the UI. */}

    </div>

  )

}

export default RefVsState