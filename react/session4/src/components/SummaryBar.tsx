import { useInterns } from '../contexts/intern-context'

export default function SummaryBar() {
  const { interns } = useInterns()

  const total = interns.length
  const present = interns.filter(i => i.isPresent).length

  const average =
    total === 0
      ? 0
      : (
          interns.reduce((sum, i) => sum + i.score, 0) / total
        ).toFixed(1)

  return (
    <div>
      <p>Total: {total}</p>
      <p>Present: {present}</p>
      <p>Average: {average}</p>
    </div>
  )
}