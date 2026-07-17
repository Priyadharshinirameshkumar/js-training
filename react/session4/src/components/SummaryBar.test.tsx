import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import SummaryBar from './SummaryBar'

vi.mock('../contexts/intern-context', () => ({
  useInterns: () => ({
    interns: [
      {
        id: 1,
        name: 'Rahul',
        score: 92,
        isPresent: true,
        role: 'Frontend',
      },
      {
        id: 2,
        name: 'Priya',
        score: 78,
        isPresent: true,
        role: 'Backend',
      },
      {
        id: 3,
        name: 'Amit',
        score: 45,
        isPresent: false,
        role: 'Frontend',
      },
    ],
    isLoading: false,
    addIntern: vi.fn(),
    removeIntern: vi.fn(),
  }),
}))

test('shows total intern count as 3', () => {
  render(<SummaryBar />)

  expect(screen.getByText('Total: 3')).toBeInTheDocument()
})

test('shows present intern count as 2', () => {
  render(<SummaryBar />)

  expect(screen.getByText('Present: 2')).toBeInTheDocument()
})

test('shows average score correctly', () => {
  render(<SummaryBar />)

  expect(screen.getByText('Average: 71.7')).toBeInTheDocument()
})

/*
Task 4.3

1. useState and useMemo are not mocked because they are React's
built-in hooks and should be tested as they normally behave.

2. addIntern and removeIntern are mocked using vi.fn().
If SummaryBar accidentally calls them during rendering,
the mocks prevent side effects and keep the test isolated.

3. If the Intern interface gains a new field, this mock will only
need updating if SummaryBar depends on that field. TypeScript
will usually indicate when required fields are missing.
*/