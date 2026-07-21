import { render, screen } from '../test/test-utils'
import userEvent from '@testing-library/user-event'
import { test, expect, vi } from 'vitest'
import InternRow from './InternRow'

test('finds the Remove button by role', () => {
  render(
    <InternRow
      id={1}
      name="Rahul"
      score={92}
      onRemove={() => {}}
    />
  )

  /*
  screen.debug() prints the current rendered DOM structure to the terminal.
  It is useful when a test fails or when we are unsure how an element appears
  in the DOM. By inspecting the output, we can see elements, text, attributes,
  and accessible structure, which helps us choose an appropriate Testing
  Library query such as getByRole, getByText, or getByLabelText.
  */
  screen.debug()

  const removeButton = screen.getByRole('button', {
    name: 'Remove',
  })

  expect(removeButton).toBeInTheDocument()
})

test('calls onRemove with the correct id when Remove is clicked', async () => {
  const user = userEvent.setup()
  const onRemove = vi.fn()

  render(
    <InternRow
      id={1}
      name="Rahul"
      score={92}
      onRemove={onRemove}
    />
  )

  await user.click(
    screen.getByRole('button', {
      name: 'Remove',
    })
  )

  expect(onRemove).toHaveBeenCalledTimes(1)
  expect(onRemove).toHaveBeenCalledWith(1)
})

test('does not call onRemove when row is only rendered', () => {
  const onRemove = vi.fn()

  render(
    <InternRow
      id={1}
      name="Rahul"
      score={92}
      onRemove={onRemove}
    />
  )

  expect(onRemove).not.toHaveBeenCalled()
})

/*
vi.fn() creates a mock function that records how it is called
without executing the real implementation. It lets us verify
whether a callback was called, how many times it was called,
and what arguments were passed. A real function performs the
actual application logic, whereas a mock function is used only
for testing and verification.
*/