import { useState } from 'react'

interface UseCounterOptions {
  initial?: number
  min?: number
  max?: number
  step?: number
}

interface UseCounterReturn {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

function useCounter({
  initial = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
}: UseCounterOptions = {}): UseCounterReturn {

  const [count, setCount] = useState<number>(initial)

  function increment(): void {
    setCount(prev => Math.min(prev + step, max))
  }

  function decrement(): void {
    setCount(prev => Math.max(prev - step, min))
  }

  function reset(): void {
    setCount(initial)
  }

  return {
    count,
    increment,
    decrement,
    reset,
  }
}
// useCounter is a custom hook because it uses React hooks (useState)
// and encapsulates reusable counter logic. Custom hooks must start
// with "use", follow the Rules of Hooks, and can only be called
// inside React components or other custom hooks.

export default useCounter