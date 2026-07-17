import { useState, useEffect, useRef } from "react"

interface Intern {
  id: number
  name: string
  score: number
  role: string
  isPresent: boolean
}

function Dashboard() {

  const [interns, setInterns] = useState<Intern[]>([])
  const [search, setSearch] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const searchRef = useRef<HTMLInputElement>(null)

  // Load data after component mounts
  useEffect(() => {

    setLoading(true)

    setTimeout(() => {

      setInterns([
        { id: 1, name: "Rahul", score: 92, role: "Frontend", isPresent: true },
        { id: 2, name: "Priya", score: 78, role: "Backend", isPresent: true },
        { id: 3, name: "Amit", score: 45, role: "Frontend", isPresent: false },
        { id: 4, name: "Sneha", score: 95, role: "Fullstack", isPresent: true }
      ])

      setLoading(false)

    }, 1500)

  }, [])

  // Focus search input when panel opens
  useEffect(() => {

    if (isOpen) {

      searchRef.current?.focus()

    }

  }, [isOpen])

  // Filtered list (derived state)
  const filteredInterns: Intern[] = interns.filter(intern =>
    intern.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {

    return <h2>Loading Interns...</h2>

  }

  return (

    <div style={{ padding: "20px" }}>

      <h1>Intern Dashboard</h1>

      <p>

        Showing {filteredInterns.length} of {interns.length} interns

      </p>

      <button onClick={() => setIsOpen(prev => !prev)}>

        {isOpen ? "Close Search" : "Open Search"}

      </button>

      {isOpen && (

        <div style={{ marginTop: "15px" }}>

          <input
            ref={searchRef}
            type="text"
            placeholder="Search Intern..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      )}

      <hr />

      {filteredInterns.map((intern) => (

        <div
          key={intern.id}
          style={{
            border: "1px solid gray",
            marginBottom: "15px",
            padding: "10px"
          }}
        >

          <h3>{intern.name}</h3>

          <p>Role: {intern.role}</p>

          <p>Score: {intern.score}</p>

          <span
            style={{
              color: intern.score >= 50 ? "green" : "red",
              fontWeight: "bold"
            }}
          >
            {intern.score >= 50 ? "PASS" : "FAIL"}
          </span>

        </div>

      ))}

      {/* Dashboard Summary:
          - useState stores interns, search text, loading status, and panel state.
          - useEffect loads data after the component mounts and focuses the search
            input whenever the search panel opens.
          - useRef stores a reference to the search input so it can be focused
            programmatically.
          - The filtered list is derived using filter() instead of storing another
            state variable, avoiding duplicate state. */}

    </div>

  )

}

export default Dashboard