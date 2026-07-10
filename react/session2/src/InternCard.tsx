
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



interface InternCardProps {
  name: string
  score: number
  isPresent: boolean
}

function InternCard({ name, score, isPresent }: InternCardProps) {

  // ❌ Do NOT modify props directly
  // score = score + 10

  // ✅ Create a new value based on the prop
  const adjustedScore: number = score >= 90 ? score : score + 5

  return (
    <div className="card">
      <h2>{name}</h2>

      <p>Original score: {score}</p>

      <p>Adjusted score: {adjustedScore}</p>

      <p>{isPresent ? "Present" : "Absent"}</p>

      {/* Props are read-only and should never be modified directly.
          Mutating props can cause inconsistent UI and unexpected behavior
          because the parent component owns the prop values. Instead,
          create a new value based on the prop when needed. */}
    </div>
  )
}

export default InternCard