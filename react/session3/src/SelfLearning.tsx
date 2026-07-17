import { useState, useEffect } from "react"

/* ==========================================================
1. React.StrictMode

Observation:
- React.StrictMode is a development tool that helps detect potential problems.
- In development mode, it intentionally renders components and runs useEffect
  twice (with cleanup in between) to help identify side effects.
- This behavior does NOT happen in production.
- While testing, you may notice duplicate console logs or effects running twice.
========================================================== */

/* ==========================================================
2. useLayoutEffect vs useEffect

- useEffect runs AFTER the browser paints the UI to the screen.
- useLayoutEffect runs BEFORE the browser paints the UI.
- Use useEffect for API calls, timers, and event listeners.
- Use useLayoutEffect when measuring or modifying the DOM before the
  user sees it, such as preventing layout flicker.
========================================================== */

/* ==========================================================
3. Updating State inside useEffect without Dependency Array

Example:

useEffect(() => {
    setCount(count + 1)
})

- Without a dependency array, useEffect runs after every render.
- Updating state causes another render.
- That render runs useEffect again, which updates state again.
- This creates an infinite render loop.
========================================================== */

/* ==========================================================
4. useReducer vs useState

- useState is best for simple state like counters, inputs, or booleans.
- useReducer is better when state is complex, contains multiple related
  values, or has many update actions.
- useReducer keeps update logic in one reducer function, making large
  applications easier to manage and maintain.
========================================================== */

function LiveTimer() {
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    // Cleanup prevents multiple timers and memory leaks.
    // Removing this cleanup causes additional intervals to keep
    // running after every re-render or component unmount.
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h3>Live Timer</h3>
      <p>{seconds} seconds</p>
    </div>
  )
}

function SelfLearning() {
  return (
    <div>
      <h1>React Session 3 - Self Learning</h1>

      <LiveTimer />

      {/* ======================================================
      5. useEffect Cleanup Function

      - Cleanup functions run before the effect runs again and
        when the component unmounts.
      - They remove timers, event listeners, subscriptions,
        or other resources that are no longer needed.
      - Without cleanup, multiple timers or event listeners
        continue running, causing duplicate executions,
        memory leaks, and slower applications.
      ====================================================== */}
    </div>
  )
}

export default SelfLearning