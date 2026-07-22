import { useState } from "react"

interface Intern {
  id: number
  name: string
}

function InternList() {

  const [interns, setInterns] = useState<Intern[]>([])
  const [inputName, setInputName] = useState<string>("")
  const [nextId, setNextId] = useState<number>(1)

  function handleAdd(): void {

    if (!inputName.trim()) return

    setInterns(prev => [
      ...prev,
      {
        id: nextId,
        name: inputName.trim(),
      }
    ])

    setNextId(prev => prev + 1)

    setInputName("")
  }

  function handleRemove(id: number): void {

    setInterns(prev =>
      prev.filter(i => i.id !== id)
    )

  }

  return (

    <div>

      <input
        type="text"
        value={inputName}
        onChange={e => setInputName(e.target.value)}
        placeholder="Intern name"
      />

      <button onClick={handleAdd}>
        Add
      </button>

      <p>
        Total: {interns.length}
      </p>

      <ul>

        {interns.map(i => (

          <li key={i.id}>

            {i.name}

            <button
              onClick={() => handleRemove(i.id)}
            >
              Remove
            </button>

          </li>

        ))}

      </ul>

      {/* [...prev, newIntern] creates a new array by copying all existing
          items and adding the new intern at the end. filter() creates a new
          array without the removed item. React requires immutable updates,
          so push() and splice() should be avoided because they modify the
          existing array directly and may prevent React from detecting changes
          correctly. */}

    </div>

  )
}

export default InternList