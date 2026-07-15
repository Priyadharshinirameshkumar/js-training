import { useInterns } from '../contexts/intern-context'
import useInternSearch from '../hooks/useInternSearch'

function InternSearch() {

  const { interns, isLoading } = useInterns()

  const {
    search,
    setSearch,
    filtered,
    stats,
  } = useInternSearch(interns)

  if (isLoading) {
    return <p>Loading interns...</p>
  }

  return (
    <div>

      <h2>Search Interns</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      <p>Total : {stats.total}</p>

      <p>Present : {stats.present}</p>

      <p>Average Score : {stats.avg}</p>

      <hr />

      <h3>Results</h3>

      {filtered.length === 0 ? (
        <p>No Intern Found</p>
      ) : (
        <ul>
          {filtered.map((intern) => (
            <li key={intern.id}>
              {intern.name} | {intern.role} | {intern.score}
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default InternSearch