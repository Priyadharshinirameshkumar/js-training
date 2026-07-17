import { render, screen, waitFor } from '../test/test-utils'
import ScoreStats from './ScoreStats'

test('shows loading state initially', () => {
  render(<ScoreStats />)

  expect(
    screen.getByText('Loading interns...')
  ).toBeInTheDocument()
})

test('shows statistics after loading completes', async () => {
  render(<ScoreStats />)

  await screen.findByText(/Highest:/)

  expect(
    screen.getByText(/Highest:/)
  ).toBeInTheDocument()

  expect(
    screen.getByText(/Passing:/)
  ).toBeInTheDocument()

  expect(
    screen.queryByText('Loading interns...')
  ).not.toBeInTheDocument()
})

/*
findBy... is used for asynchronous UI updates.
It automatically waits until the element appears
or the timeout expires, making it ideal for data
loaded after an API call or setTimeout.
*/



test('statistics appear after data loads', async () => {
  render(<ScoreStats />)

  await waitFor(() => {
    expect(screen.getByText(/Highest:/)).toBeInTheDocument()
    expect(screen.getByText(/Passing:/)).toBeInTheDocument()
  })
})
/*
findBy is used when waiting for a single element to appear in the
DOM. It automatically retries until that element is found.

waitFor is used for more complex conditions, such as waiting for
multiple assertions to pass, waiting for an element to disappear,
or waiting for state changes that cannot be expressed with a single
findBy query.
*/
