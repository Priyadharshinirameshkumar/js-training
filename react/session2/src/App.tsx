// import InternCard from "./InternCard"

// function App() {
//   return (
//     <div>
//       <InternCard
//         name="Rahul"
//         score={92}
//         isPresent={true}
//       />

//       {/* Error: Type 'string' is not assignable to type 'number'.
//     TypeScript catches this before the app runs, preventing bugs caused
//     by passing the wrong data type. */}

//     {/* Error: Type 'string' is not assignable to type 'boolean'.
//     TypeScript ensures only boolean values are passed, avoiding
//     incorrect logic during runtime. */}

//     {/* Error: Property 'isPresent' is missing.
//     Required props must always be provided, ensuring the component
//     receives all the data it needs. */}

//     {/* Error: Property 'age' does not exist on type 'InternCardProps'.
//     TypeScript prevents passing unexpected props, helping keep
//     components consistent and easier to maintain. */}

//       <InternCard
//         name="Priya"
//         score={78}
//         isPresent={true}
//       />

//       <InternCard
//         name="Amit"
//         score={45}
//         isPresent={false}
//       />
//     </div>
//   )
// }

// export default App






// import ProfileCard from "./ProfileCard"

// function App() {
//   return (
//     <div>

//       <ProfileCard
//         name="Rahul"
//         role="Frontend"
//         score={92}
//       />

//       <ProfileCard
//         name="Priya"
//       />

//       <ProfileCard />

//     </div>
//   )
// }

// export default App



//task 2.2

// import ProfileCard from "./ProfileCard"

// function App() {
//   return (
//     <div>

//       <ProfileCard
//         name="Rahul"
//         role="Frontend"
//         score={92}
//         skills={["React", "TypeScript", "CSS"]}
//       />

//       <ProfileCard
//         name="Priya"
//         skills={["Node.js", "Express"]}
//       />

//       <ProfileCard />

//     </div>
//   )
// }

// export default App


//task 3.1

// import InternProfile from "./InternProfile"
// import type { Intern } from "./InternProfile"

// function App() {

//   const rahul: Intern = {
//     id: 1,
//     name: "Rahul",
//     score: 92,
//     isPresent: true,
//     skills: ["HTML", "CSS", "TypeScript", "React"],
//   }

//   return (
//     <div>
//       <InternProfile intern={rahul} />
//     </div>
//   )
// }

// export default App

//task 3.2

// import InternProfile from "./InternProfile"
// import type { Intern } from "./InternProfile"

// function App() {

//   const rahul: Intern = {
//     id: 1,
//     name: "Rahul",
//     score: 92,
//     isPresent: true,
//     skills: ["HTML", "CSS", "TypeScript", "React"],
//   }

//   const priya: Intern = {
//     id: 2,
//     name: "Priya",
//     score: 78,
//     isPresent: true,
//     skills: ["Node.js", "TypeScript"],
//   }

//   return (
//     <div>

//       {/* Passing the original object */}
//       <InternProfile intern={rahul} />

//       {/* These two are equivalent */}
//       <InternProfile intern={priya} />

//       <InternProfile intern={{ ...priya }} />

//       {/* The spread operator (...) creates a shallow copy of an object.
//           It is useful when creating a new object or updating values without
//           changing the original object. However, using it unnecessarily can
//           make the code harder to read when the original object can be passed
//           directly. */}

//     </div>
//   )
// }

// export default App


//task 4.1

// import Card from "./Card"

// function App() {
//   return (
//     <div>

//       <Card title="Rahul">
//         <p>Score: 92</p>
//         <p>Status: Present</p>
//         <button>View Profile</button>
//       </Card>

//       <Card title="Announcements">
//         <ul>
//           <li>Session 3 tomorrow at 10am</li>
//           <li>Submit PRs by EOD</li>
//         </ul>
//       </Card>

//     </div>
//   )
// }

// export default App

//task 4.2

// import Card from "./Card"

// function App() {
//   return (
//     <div>

//       <Card title="Rahul">
//         <p>Score: 92</p>
//         <p>Status: Present</p>
//         <button>View Profile</button>
//       </Card>

//       <Card title="Announcements">
//         <ul>
//           <li>Session 3 tomorrow at 10am</li>
//           <li>Submit PRs by EOD</li>
//         </ul>
//       </Card>

//       <Card title="Empty Card" />

//     </div>
//   )
// }

// export default App



//task 5.2
// import InternCard from "./InternCard"

// function App() {
//   return (
//     <div>

//       <InternCard
//         name="Rahul"
//         score={92}
//         isPresent={true}
//         role="Frontend"
//       />

//       <InternCard
//         name="Priya"
//         score={78}
//         isPresent={true}
//         role="Backend"
//       />

//       <InternCard
//         name="Amit"
//         score={45}
//         isPresent={false}
//         role="Intern"
//       />

//     </div>
//   )
// }

// export default App


//task 6.1

import Dashboard from "./Dashboard"

function App() {
  return <Dashboard />
}

export default App


