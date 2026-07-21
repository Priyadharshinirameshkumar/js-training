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

/*
External Dependencies:

1. useInterns() from intern-context
   - Provides the intern list.
   - If used directly in tests, the component depends on the real provider.

Potential FIRST Principle Issues:

- Using the real InternProvider can make tests slower.
- The data may change, making tests less repeatable.
- Tests become dependent on context setup instead of only the SummaryBar component.

To keep tests fast, independent, and repeatable, useInterns is mocked in the tests.
*/