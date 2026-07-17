import { act, render, screen } from './test-utils'
import { vi } from 'vitest'
import { useInterns } from '../contexts/intern-context'

function InternLoadingTest() {
  const { interns, isLoading } = useInterns()

  if (isLoading) {
    return <p>Loading interns...</p>
  }

  return (
    <div>
      {interns.map(intern => (
        <p key={intern.id}>{intern.name}</p>
      ))}
    </div>
  )
}

/*
vi.useFakeTimers() replaces real timer functions such as setTimeout
and setInterval with fake timers controlled by Vitest.

This allows tests to fast-forward timer-based code immediately instead
of waiting for the actual delay. vi.runAllTimers() executes all pending
timers, while vi.useRealTimers() restores the normal timer behavior
after the test.
*/

test('fast-forwards the intern loading delay using fake timers', () => {
  vi.useFakeTimers()

  render(<InternLoadingTest />)

  // InternProvider initially displays the loading state
  expect(
    screen.getByText('Loading interns...')
  ).toBeInTheDocument()

  // Fast-forward the 800ms setTimeout inside InternProvider
  act(() => {
    vi.runAllTimers()
  })

  // Data should now be loaded immediately
  expect(
    screen.queryByText('Loading interns...')
  ).not.toBeInTheDocument()

  expect(screen.getByText('Rahul')).toBeInTheDocument()
  expect(screen.getByText('Priya')).toBeInTheDocument()

  // Always restore real timers after using fake timers
  vi.useRealTimers()
})