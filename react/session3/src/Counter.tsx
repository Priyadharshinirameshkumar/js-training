import { useState } from "react"

function Counter() {

  const [count, setCount] = useState<number>(0)

  return (
    <div>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      {/* React state must be updated using the setter function.
          Directly assigning count = count + 1 only changes the
          local variable and does not trigger a re-render.
          Calling setCount() updates the state and tells React
          to refresh the UI with the new value. */}

    </div>
  )
}

export default Counter