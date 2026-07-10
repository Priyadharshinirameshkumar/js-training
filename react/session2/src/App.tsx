import InternCard from "./InternCard"

function App() {
  return (
    <div>
      <InternCard
        name="Rahul"
        score={92}
        isPresent={true}
      />

      <InternCard
        name="Priya"
        score={78}
        isPresent={true}
      />

      <InternCard
        name="Amit"
        score={45}
        isPresent={false}
      />
    </div>
  )
}

export default App