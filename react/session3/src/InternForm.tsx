import { useState } from "react"

function InternForm() {

  const [name, setName] = useState<string>("")
  const [score, setScore] = useState<number>(0)

  function handleNameChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setName(e.target.value)
  }

  function handleScoreChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {

    // HTML input values are always strings.
    // Number() converts the string to a number before storing it in state.
    setScore(Number(e.target.value))

  }

  function handleReset(): void {
    setName("")
    setScore(0)
  }

  return (

    <div>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Intern Name"
      />

      <input
        type="number"
        value={score}
        onChange={handleScoreChange}
        placeholder="Score"
      />

      <p>
        Name: {name} | Score: {score}
      </p>

      <button onClick={handleReset}>
        Reset
      </button>

      {/* A controlled input is an input whose value is managed by React state.
          The value shown in the input always comes from state, and every user
          change updates the state through the onChange handler. */}

    </div>

  )
}

export default InternForm