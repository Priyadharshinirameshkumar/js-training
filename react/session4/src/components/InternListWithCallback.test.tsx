import { render, screen } from '../test/test-utils'
import { test, expect, vi } from 'vitest'
import InternListWithCallback from './InternListWithCallback'

// Mock the intern context
vi.mock('../contexts/intern-context', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('../contexts/intern-context')>()

  return {
    ...actual,

    useInterns: () => ({
      interns: [
        {
          id: 1,
          name: 'Rahul',
          score: 92,
          role: 'Frontend',
          isPresent: true,
        },
        {
          id: 2,
          name: 'Priya',
          score: 78,
          role: 'Backend',
          isPresent: true,
        },
        {
          id: 3,
          name: 'Amit',
          score: 45,
          role: 'Fullstack',
          isPresent: false,
        },
      ],
      isLoading: false,
      addIntern: vi.fn(),
      removeIntern: vi.fn(),
    }),
  }
})

test('renders all interns from context', () => {
  render(<InternListWithCallback />)

  expect(screen.getByText('Rahul — 92')).toBeInTheDocument()
  expect(screen.getByText('Priya — 78')).toBeInTheDocument()
  expect(screen.getByText('Amit — 45')).toBeInTheDocument()
})

test('renders the correct number of Remove buttons', () => {
  render(<InternListWithCallback />)

  const removeButtons = screen.getAllByRole('button', {
    name: 'Remove',
  })

  expect(removeButtons).toHaveLength(3)
})

/*
Mock as little as possible. Only mock external dependencies such
as context values, API calls, timers, or browser APIs that make
tests difficult to control. Allow the component's own rendering
and business logic to execute normally so the test verifies the
actual behavior rather than the mocked implementation.
*/