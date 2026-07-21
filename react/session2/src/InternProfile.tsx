// Shared interface that defines the structure of an Intern object.
interface Intern {
  id: number
  name: string
  score: number
  isPresent: boolean
  skills: string[]
}

// The component receives one prop called "intern",
// whose type is the Intern interface.
interface InternProfileProps {
  intern: Intern
}

function InternProfile({ intern }: InternProfileProps) {
  return (
    <div className="card">
      <h2>{intern.name}</h2>

      <p>Score: {intern.score}</p>

      <p>{intern.isPresent ? "Present" : "Absent"}</p>

      <ul>
        {intern.skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* A separate Intern interface defines the data structure in one place.
          It can be reused by multiple components and keeps the props interface
          clean, consistent, and easier to maintain. */}
    </div>
  )
}

export default InternProfile

// Export the interface so it can be reused in App.tsx
export type { Intern }