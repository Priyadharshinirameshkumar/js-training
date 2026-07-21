import { useReducer } from 'react'
import { memo } from 'react'

/*
==========================================================
Self Learning Task 1 – React.memo
==========================================================

React.memo is a Higher Order Component (HOC) that prevents
a functional component from re-rendering if its props have
not changed.

React.memo compares the previous props with the new props.
If they are the same, React skips rendering that component.

React.memo works best with useCallback.
Without useCallback, callback functions are recreated on
every render, causing React.memo to think the props changed.

Example:

const MemoInternRow = React.memo(InternRow);

This helps avoid unnecessary re-rendering of child components.
*/

interface InternRowProps {
  name: string
}

function InternRow({ name }: InternRowProps) {
  console.log("Rendering:", name)

  return <p>{name}</p>
}

// React.memo example
const MemoInternRow = memo(InternRow)

/*
==========================================================
Self Learning Task 2 – When NOT to use useMemo/useCallback
==========================================================

Do NOT use useMemo or useCallback for every value or function.

Example 1:
-----------
const fullName = firstName + lastName

This calculation is very small.
Using useMemo would add unnecessary complexity and overhead.

Example 2:
-----------
const handleClick = () => console.log("Hello")

If this function is not passed to memoized child components,
using useCallback provides no real performance benefit.

Using these hooks unnecessarily can:
- Make code harder to read
- Increase memory usage
- Add unnecessary optimization overhead
*/

/*
==========================================================
Self Learning Task 3 – useReducer
==========================================================

useReducer is useful when state logic becomes more complex.

Instead of multiple useState calls, one reducer manages all
state updates in a single place.

It is especially useful when:
- Many state values are related
- Multiple actions update the same state
- State logic becomes complicated
*/

interface CounterState {
  count: number
}

type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }

function reducer(
  state: CounterState,
  action: CounterAction
): CounterState {

  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }

    case 'decrement':
      return { count: state.count - 1 }

    case 'reset':
      return { count: 0 }

    default:
      return state
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>useReducer Counter</h2>

      <p>{state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>

      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>

      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  )
}

/*
Comment:

useReducer is preferable when multiple state values are related
or when state updates involve complex logic. It keeps all update
logic in one reducer function, making large applications easier
to maintain.
*/

/*
==========================================================
Self Learning Task 4 – Zustand vs Redux vs Context API
==========================================================

Context + useState

Suitable for:
- Theme
- Authentication
- Language
- Small and medium applications

Advantages:
- Built into React
- Simple
- No additional library

Limitations:
- Frequent updates can cause many components to re-render.
- Not ideal for large applications.

----------------------------------------------------------

Zustand

Suitable for:
- Medium to large applications
- Simple API
- Minimal boilerplate

Advantages:
- Very easy to learn
- Better performance than Context for frequently changing state
- Less code than Redux

----------------------------------------------------------

Redux Toolkit

Suitable for:
- Very large enterprise applications
- Complex business logic
- Large development teams

Advantages:
- Predictable state management
- Excellent DevTools
- Middleware support
- Easy debugging

----------------------------------------------------------

Summary:

Context + useState is perfect for small projects.
Zustand is a lightweight modern solution for medium projects.
Redux Toolkit is the preferred choice for very large applications
with complex shared state.
*/

function SelfLearning() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Session 4 - Self Learning</h1>

      <h2>React.memo Example</h2>
      <MemoInternRow name="Rahul" />

      <hr />

      <CounterReducer />
    </div>
  )
}

export default SelfLearning