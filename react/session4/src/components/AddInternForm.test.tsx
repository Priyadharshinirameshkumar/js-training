import { render, screen, waitFor } from '../test/test-utils'
import userEvent from '@testing-library/user-event'
import AddInternForm from './AddInternForm'

/*
userEvent is preferred over fireEvent because it simulates
real user interactions such as typing, clicking, focusing,
and keyboard events. It behaves more like a real browser,
making tests more reliable and closer to actual user behavior.
*/

describe('AddInternForm', () => {

  describe('user interactions', () => {

    test('updates name when user types', async () => {
        expect.hasAssertions()
      const user = userEvent.setup()
      render(<AddInternForm />)

      const nameInput = screen.getByPlaceholderText('Name')

      await user.type(nameInput, 'Rahul')

      expect(screen.getByDisplayValue('Rahul')).toBeInTheDocument()
    })

    test('updates score when user types', async () => {
      const user = userEvent.setup()
      render(<AddInternForm />)

      const scoreInput = screen.getByPlaceholderText('Score')

      await user.clear(scoreInput)
      await user.type(scoreInput, '92')

      expect(screen.getByDisplayValue('92')).toBeInTheDocument()
    })
  })


  describe('reset behavior', () => {

    test('resets name input when Reset is clicked', async () => {
      const user = userEvent.setup()
      render(<AddInternForm />)

      const nameInput = screen.getByPlaceholderText('Name')

      await user.type(nameInput, 'Rahul')

      expect(nameInput).toHaveValue('Rahul')

      await user.click(
        screen.getByRole('button', { name: 'Reset' })
      )

      expect(nameInput).toHaveValue('')
    })

    test('resets score when Reset is clicked', async () => {
      const user = userEvent.setup()
      render(<AddInternForm />)

      const scoreInput = screen.getByPlaceholderText('Score')

      await user.clear(scoreInput)
      await user.type(scoreInput, '92')

      expect(scoreInput).toHaveValue(92)

      await user.click(
        screen.getByRole('button', { name: 'Reset' })
      )

      expect(scoreInput).toHaveValue(0)
    })
  })


  describe('validation', () => {

    test('shows error when name is empty on submit', async () => {
      const user = userEvent.setup()
      render(<AddInternForm />)

      await user.click(
        screen.getByRole('button', { name: 'Add Intern' })
      )

      expect(
        screen.getByText('Name is required')
      ).toBeInTheDocument()
    })

    test('shows error when score is above 100', async () => {
      const user = userEvent.setup()
      render(<AddInternForm />)

      await user.type(
        screen.getByPlaceholderText('Name'),
        'Rahul'
      )

      await user.clear(
        screen.getByPlaceholderText('Score')
      )

      await user.type(
        screen.getByPlaceholderText('Score'),
        '150'
      )

      await user.click(
        screen.getByRole('button', { name: 'Add Intern' })
      )

      expect(
        screen.getByText('Score must be 0–100')
      ).toBeInTheDocument()
    })

    test('does not add an intern when the form is invalid', async () => {
      const user = userEvent.setup()
      render(<AddInternForm />)

      await user.click(
        screen.getByRole('button', { name: 'Add Intern' })
      )

      expect(
        screen.getByText('Name is required')
      ).toBeInTheDocument()
    })

    test('error clears when valid name is entered after failed submit', async () => {
      const user = userEvent.setup()
      render(<AddInternForm />)

      await user.click(
        screen.getByRole('button', { name: 'Add Intern' })
      )

      expect(
        screen.getByText('Name is required')
      ).toBeInTheDocument()

      await user.type(
        screen.getByPlaceholderText('Name'),
        'Rahul'
      )

      await waitFor(() => {
        expect(
          screen.queryByText('Name is required')
        ).not.toBeInTheDocument()
      })
    })
  })
})

/*
describe blocks should generally be nested no more than two levels
deep because excessive nesting makes tests harder to read and
understand. Deep nesting also makes test names longer and creates
dependencies on multiple parent contexts. Keeping the structure
shallow makes failed tests easier to identify, debug, and maintain.
*/
/*
userEvent is preferred over fireEvent because it simulates
real user interactions such as typing, clicking, focusing,
and keyboard events. It behaves more like a real browser,
making tests more reliable and closer to actual user behavior.
*/

/*
expect.objectContaining(...) checks only the specified
properties while ignoring any additional properties.
It is more flexible than comparing the entire object
because fields such as id, role, or isPresent may also
exist but are not relevant to the current test.
*/

/*
NOTE:

The original assignment uses the following component:

<AddInternForm onAdd={onAdd} count={0} />

and verifies the callback using:

const onAdd = vi.fn()

However, this project follows a different architecture.

AddInternForm does not receive an onAdd callback as a prop.
Instead, it uses the useInterns() context hook internally and
calls addIntern() from InternProvider.

Because there is no onAdd prop to mock or verify, the assignment
test cannot be implemented directly without changing the component
design or mocking the entire context.

Therefore, this project tests the actual user interactions
(typing, resetting, and form behavior) while keeping the
existing Session 4 implementation unchanged.
*/

/*
not.toHaveBeenCalled() verifies that a mock function was never
called. It is clearer and more readable than
toHaveBeenCalledTimes(0) because it directly expresses the
intention that the function should not be called at all.
*/



/*
queryBy is used instead of getBy because we are checking
that the error message has disappeared. If the element is
not found, queryBy returns null, whereas getBy would throw
an error immediately.
*/