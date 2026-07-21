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
        <h1>Intern Dashboard</h1>

        <ScoreStats />
        <AddInternForm />
        <InternSearch />
        <InternListWithCallback />
      </div>
    </div>
  )
}

export default App