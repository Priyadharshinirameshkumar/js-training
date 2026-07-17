// import PropDrillingDemo from "./components/PropDrillingDemo"

// function App() {
//   return (
//     <div>
//       <PropDrillingDemo />
//     </div>
//   )
// }

// export default App


// import Navbar from './components/Navbar'
// import ThemedCard from './components/ThemedCard'

// function App() {
//   return (
//     <div>
//       <Navbar />

//       <div style={{ padding: '16px' }}>
//         <ThemedCard name="Rahul" score={92} />

//         <ThemedCard name="Priya" score={78} />

//         <ThemedCard name="Amit" score={45} />
//       </div>
//     </div>
//   )
// }

// export default App


// import Navbar from './components/Navbar'
// import ThemedCard from './components/ThemedCard'

// import { useInterns } from './contexts/intern-context'

// function App() {
//   const { interns, isLoading } = useInterns()

//   if (isLoading) {
//     return <p>Loading interns...</p>
//   }

//   return (
//     <div>
//       <Navbar />

//       <div style={{ padding: '16px' }}>
//         {interns.map(intern => (
//           <ThemedCard
//             key={intern.id}
//             name={intern.name}
//             score={intern.score}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App

// import CounterDemo from './components/CounterDemo'

// function App() {
//   return (
//     <div>
//       <CounterDemo />
//     </div>
//   )
// }

// export default App

// import Navbar from './components/Navbar'
// import ThemedCard from './components/ThemedCard'
// import AddInternForm from './components/AddInternForm'

// import { useInterns } from './contexts/intern-context'

// function App() {
//   const { interns, isLoading } = useInterns()

//   if (isLoading) {
//     return <p>Loading...</p>
//   }

//   return (
//     <div>
//       <Navbar />

//       <AddInternForm />

//       {interns.map(intern => (
//         <ThemedCard
//           key={intern.id}
//           name={intern.name}
//           score={intern.score}
//         />
//       ))}
//     </div>
//   )
// }

// export default App


// import Navbar from './components/Navbar'
// import AddInternForm from './components/AddInternForm'
// import InternSearch from './components/InternSearch'

// function App() {
//   return (
//     <div>
//       <Navbar />

//       <div style={{ padding: '20px' }}>
//         <AddInternForm />

//         <hr />

//         <InternSearch />
//       </div>
//     </div>
//   )
// }

// export default App


// import Navbar from './components/Navbar'
// import ScoreStats from './components/ScoreStats'
// import AddInternForm from './components/AddInternForm'
// import InternSearch from './components/InternSearch'

// function App() {
//   return (
//     <div>
//       <Navbar />

//       <div style={{ padding: '20px' }}>
//         <ScoreStats />

//         <AddInternForm />

//         <hr />

//         <InternSearch />
//       </div>
//     </div>
//   )
// }

// export default App

// import Navbar from './components/Navbar'
// import ScoreStats from './components/ScoreStats'
// import AddInternForm from './components/AddInternForm'
// import InternSearch from './components/InternSearch'
// import InternListWithCallback from './components/InternListWithCallback'

// function App() {
//   return (
//     <div>
//       <Navbar />

//       <div style={{ padding: '20px' }}>
//         <ScoreStats />

//         <AddInternForm />

//         <InternSearch />

//         <InternListWithCallback />
//       </div>
//     </div>
//   )
// }

// export default App


import Navbar from './components/Navbar'
import ScoreStats from './components/ScoreStats'
import AddInternForm from './components/AddInternForm'
import InternSearch from './components/InternSearch'
import InternListWithCallback from './components/InternListWithCallback'

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: '16px' }}>
        <ScoreStats />
        <AddInternForm />
        <InternSearch />
        <InternListWithCallback />
      </div>
    </div>
  )
}
// Application Architecture:
// - Contexts: Store and share global data like theme and intern information.
// - Custom Hooks: Contain reusable business logic such as counters, forms, and searching.
// - Components: Render the user interface by consuming data from contexts and hooks.
// This separation keeps the code modular, reusable, and easier to maintain.
export default App