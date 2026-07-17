import { render, screen } from '../test/test-utils'
import { vi, test, expect } from 'vitest'
import ThemedCard from './ThemedCard'

/*
We import render and screen from ../test/test-utils instead of directly
from @testing-library/react because our custom render automatically wraps
the component with shared providers such as ThemeProvider.
This allows components like ThemedCard, which use useTheme(), to access
the required context during testing.
*/

test('renders the intern name', () => {
  render(<ThemedCard name="Rahul" score={92} />)

  expect(screen.getByText('Rahul')).toBeInTheDocument()
})

test('renders the score', () => {
  render(<ThemedCard name="Rahul" score={92} />)

  expect(screen.getByText('Score: 92')).toBeInTheDocument()
})

test('shows Pass when score is 50 or above', () => {
  render(<ThemedCard name="Rahul" score={92} />)

  expect(screen.getByText('Pass')).toBeInTheDocument()
})

test('shows Fail when score is below 50', () => {
  render(<ThemedCard name="Amit" score={45} />)

  expect(screen.getByText('Fail')).toBeInTheDocument()
})

/*
toBeInTheDocument() checks that an element exists in the rendered DOM.
When we expect an element to exist, we normally use getBy because it
throws an error if the element cannot be found.

not.toBeInTheDocument() checks that an element does not exist in the DOM.
When checking that something is absent, we use queryBy because it returns
null when the element is not found instead of throwing an error.
*/

test('does not show Fail when intern has a passing score', () => {
  render(<ThemedCard name="Rahul" score={92} />)

  expect(screen.queryByText('Fail')).not.toBeInTheDocument()
})

test('does not show Pass when intern has a failing score', () => {
  render(<ThemedCard name="Amit" score={45} />)

  expect(screen.queryByText('Pass')).not.toBeInTheDocument()
})

/*
Testing boundary values such as 0 and 100 is important because they represent
the minimum and maximum expected scores. Testing these separately from a
typical value like 92 helps verify that the component handles extreme values
correctly and catches possible boundary-condition or comparison errors.
*/

test('renders score of 0 correctly', () => {
  render(<ThemedCard name="Neha" score={0} />)

  expect(screen.getByText('Score: 0')).toBeInTheDocument()
  expect(screen.getByText('Fail')).toBeInTheDocument()
})

test('renders score of 100 correctly', () => {
  render(<ThemedCard name="Neha" score={100} />)

  expect(screen.getByText('Score: 100')).toBeInTheDocument()
  expect(screen.getByText('Pass')).toBeInTheDocument()
})

test('renders a different name and score without mixing up values', () => {
  render(<ThemedCard name="Priya" score={75} />)

  expect(screen.getByText('Priya')).toBeInTheDocument()
  expect(screen.getByText('Score: 75')).toBeInTheDocument()
})

test('no console errors during ThemedCard render', () => {
  const spy = vi
    .spyOn(console, 'error')
    .mockImplementation(() => {})

  render(<ThemedCard name="Rahul" score={92} />)

  expect(spy).not.toHaveBeenCalled()

  spy.mockRestore()
})

/*
vi.fn() creates a standalone mock function that records how it is
called without executing real application logic.

vi.mock() replaces an entire module or selected exports with mock
implementations so tests can control dependencies.

vi.spyOn() observes an existing function or method, allowing tests
to verify its usage while optionally replacing its implementation.
*/