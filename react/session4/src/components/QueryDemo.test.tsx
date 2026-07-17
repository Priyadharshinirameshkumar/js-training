import { render, screen } from '../test/test-utils'
import ThemedCard from './ThemedCard'

// getBy — throws an error if the element is not found.
// Use getBy when we expect exactly one matching element to be present.
test('getByText finds an element that exists', () => {
  render(<ThemedCard name="Rahul" score={92} />)

  // This passes because Rahul exists in the rendered component.
  expect(screen.getByText('Rahul')).toBeInTheDocument()

  // Uncommenting the line below would throw an error
  // because Priya is not rendered.
  // screen.getByText('Priya')
})

// queryBy — returns null if the element is not found.
// It is useful when checking that something is NOT rendered.
test('queryBy returns null when element is missing', () => {
  render(<ThemedCard name="Rahul" score={92} />)

  // Rahul scored 92, so Pass is displayed and Fail should not exist.
  expect(screen.queryByText('Fail')).not.toBeInTheDocument()
})

// getAllBy — returns an array containing all matching elements.
test('getAllBy finds multiple elements', () => {
  render(
    <div>
      <ThemedCard name="Rahul" score={92} />
      <ThemedCard name="Priya" score={78} />
    </div>
  )

  // Both interns have passing scores, so there are two Pass elements.
  const passBadges = screen.getAllByText('Pass')

  expect(passBadges).toHaveLength(2)
})

/*
getByRole is used when we expect exactly one element with a particular
accessible role, such as one button.

Example:
screen.getByRole('button', { name: 'Remove' })

getAllByRole is used when multiple elements with the same role are expected.
It returns an array containing all matching elements.

Example:
screen.getAllByRole('button', { name: 'Remove' })

So, use getByRole for one expected matching element and getAllByRole when
multiple matching elements are expected.
*/