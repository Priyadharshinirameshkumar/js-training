// interface ProfileCardProps {
//   // The ? means these props are optional.
//   // If they are not provided, the default values below will be used.
//   name?: string
//   role?: string
//   score?: number
// }

// function ProfileCard({
//   name = "Unknown",
//   role = "Intern",
//   score = 0,
// }: ProfileCardProps) {
//   return (
//     <div className="card">
//       <h2>{name}</h2>

//       <p>Role: {role}</p>

//       <p>Score: {score}</p>
//     </div>
//   )
// }

// export default ProfileCard



//task2.2
interface ProfileCardProps {
  // Optional props
  name?: string
  role?: string
  score?: number
  skills?: string[]
}

function ProfileCard({
  name = "Unknown",
  role = "Intern",
  score = 0,
  skills = [], // Default empty array prevents errors when skills is not passed.
}: ProfileCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>Role: {role}</p>

      <p>Score: {score}</p>

      {skills.length > 0 && (
        <ul>
          {skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}

      {/* If skills = [] is removed, TypeScript reports:
          'skills' is possibly 'undefined'.
          This shows that optional array props should have a default value
          to safely use properties like .length and methods like .map(). */}
    </div>
  )
}

export default ProfileCard