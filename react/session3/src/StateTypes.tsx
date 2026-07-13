import { useState } from "react"

interface Intern {
  id: number
  name: string
  isPresent: boolean
}

function StateTypes() {

  // TypeScript automatically infers these types.
  const [name, setName] = useState("")
  const [score, setScore] = useState(0)
  const [isActive, setIsActive] = useState(false)

  // Explicit type is required because null and [] are ambiguous.
  const [selected, setSelected] = useState<Intern | null>(null)
  //const [interns, setInterns] = useState<Intern[]>([])

  return (
    <div>

      <p>Name: {name || "(none)"}</p>

      <p>Score: {score}</p>

      <p>Active: {isActive ? "Yes" : "No"}</p>

      <p>
        Selected:
        {selected ? selected.name : "(none)"}
      </p>

      

      <button onClick={() => setName("Rahul")}>
        Set Name
      </button>

      <button onClick={() => setScore(92)}>
        Set Score
      </button>

      <button onClick={() => setIsActive(true)}>
        Activate
      </button>
      <button onClick={() => setSelected({ id: 1, name: 'Rahul',isPresent:false })}>
        Activate 1
      </button>
      {/* TypeScript prevents assigning incorrect types to state.
          Calling setScore('92') causes an error because score expects a number.
          Calling setSelected({ id: 1, name: 'Rahul' }) causes an error because
          the required isPresent property is missing. This helps catch mistakes
          during development before the code runs. */}

    </div>
  )
}

export default StateTypes