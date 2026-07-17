import { act, render, screen } from './test-utils'
import { vi } from 'vitest'
import { useInterns } from '../contexts/intern-context'
import { within } from './test-utils'
import ThemedCard from '../components/ThemedCard'
import userEvent from '@testing-library/user-event'
import AddInternForm from '../components/AddInternForm'
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


/*
The within helper scopes Testing Library queries to a specific DOM
element. It is useful when the same text or elements appear in multiple
cards or rows. Instead of searching the entire page, within allows us
to verify that a particular value exists inside one specific component.
*/

test('uses within to find a score inside a specific intern card', () => {
  render(
    <div>
      <div data-testid="rahul-card">
        <ThemedCard name="Rahul" score={92} />
      </div>

      <div data-testid="priya-card">
        <ThemedCard name="Priya" score={78} />
      </div>
    </div>
  )

  const rahulCard = screen.getByTestId('rahul-card')

  expect(
    within(rahulCard).getByText('Rahul')
  ).toBeInTheDocument()

  expect(
    within(rahulCard).getByText('Score: 92')
  ).toBeInTheDocument()

  expect(
    within(rahulCard).queryByText('Score: 78')
  ).not.toBeInTheDocument()
})

/*
user.tab() simulates a real user pressing the Tab key to navigate
between focusable elements. toHaveFocus() verifies which element
currently has keyboard focus. This helps test keyboard accessibility
and ensures users can navigate the form without using a mouse.
*/

test('moves focus between form inputs using tab navigation', async () => {
  const user = userEvent.setup()

  render(<AddInternForm />)

  const nameInput = screen.getByPlaceholderText('Name')
  const scoreInput = screen.getByPlaceholderText('Score')

  await user.tab()

  expect(nameInput).toHaveFocus()

  await user.tab()

  expect(scoreInput).toHaveFocus()
})

/*
SL-5 — Coverage Report Findings

The line coverage for useInternForm.ts is ___%.

Line coverage measures how many executable lines of code were
executed by the tests.

Branch coverage measures whether all possible paths of conditional
logic were tested, such as the true and false paths of an if statement.

A file can have high line coverage but lower branch coverage because
the tests may execute most lines without testing every possible
conditional path.
*/