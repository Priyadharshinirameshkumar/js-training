
// interface InternCardProps {
//   name: string
//   score: number
//   isPresent: boolean
// }

// function InternCard({ name, score, isPresent }: InternCardProps) {
//   return (
//     <div className="card">
//       <h2>{name}</h2>

//       <p>Score: {score} / 100</p>

//       <p>{isPresent ? "Present" : "Absent"}</p>

//       {/* The interface is defined separately because it makes the code easier
//           to read, allows the same type to be reused in other components,
//           and keeps the component clean and maintainable. */}
//     </div>
//   )
// }

// // export default InternCard



// interface InternCardProps {
//   name: string
//   score: number
//   isPresent: boolean
// }

// function InternCard({ name, score, isPresent }: InternCardProps) {

//   // ❌ Do NOT modify props directly
//   // score = score + 10

//   // ✅ Create a new value based on the prop
//   const adjustedScore: number = score >= 90 ? score : score + 5

//   return (
//     <div className="card">
//       <h2>{name}</h2>

//       <p>Original score: {score}</p>

//       <p>Adjusted score: {adjustedScore}</p>

//       <p>{isPresent ? "Present" : "Absent"}</p>

//       {/* Props are read-only and should never be modified directly.
//           Mutating props can cause inconsistent UI and unexpected behavior
//           because the parent component owns the prop values. Instead,
//           create a new value based on the prop when needed. */}
//     </div>
//   )
// }

// export default InternCard


//task 5.2

import Avatar from "./Avatar"
import Badge from "./Badge"
import ScoreBar from "./ScoreBar"

interface InternCardProps {
  name: string
  score: number
  isPresent: boolean
  role: string
}

function InternCard({ name, score, isPresent, role }: InternCardProps) {
  return (
    <div className="card">
      <Avatar name={name} />

      <h2>{name}</h2>

      <ScoreBar score={score} />

      <div
        style={{
          display: "flex",
          gap: "6px",
          marginTop: "8px",
        }}
      >
        <Badge
          label={role}
          color="#4f46e5"
        />

        <Badge
          label={isPresent ? "Present" : "Absent"}
          color={isPresent ? "green" : "#e53e3e"}
        />

        {score >= 90 && (
          <Badge
            label="Top Performer"
            color="#d97706"
          />
        )}
      </div>

      {/* Badge is reusable because the same component can display
          different labels and colors by changing its props. This avoids
          repeating the same span element multiple times, keeps the code
          cleaner, easier to maintain, and TypeScript checks every usage
          against the BadgeProps interface. */}
    </div>
  )
}

export default InternCard