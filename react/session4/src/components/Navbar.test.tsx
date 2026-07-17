import { render, screen } from '../test/test-utils'
import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '../contexts/theme-context'
import Navbar from './Navbar'

/*
If render were imported directly from @testing-library/react,
Navbar would be rendered without the ThemeProvider. Since Navbar
calls useTheme(), the context value would be null and the error
"useTheme must be used inside ThemeProvider" would be thrown.

The custom render from test-utils automatically wraps the component
with the required providers, so Navbar can safely access the theme
context during testing.
*/

test('renders the dashboard title', () => {
  render(<Navbar />)

  expect(
    screen.getByText('Intern Dashboard')
  ).toBeInTheDocument()
})

test('theme toggle button is visible', () => {
  render(<Navbar />)

  expect(
    screen.getByRole('button', {
      name: /switch to dark mode/i,
    })
  ).toBeInTheDocument()
})

test('theme toggle button label changes after click', async () => {
  const user = userEvent.setup()

  render(<Navbar />)

  await user.click(
    screen.getByRole('button', {
      name: /switch to dark mode/i,
    })
  )

  expect(
    screen.getByRole('button', {
      name: /switch to light mode/i,
    })
  ).toBeInTheDocument()
})

test('renders correctly when wrapped manually in ThemeProvider', () => {
  rtlRender(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  )

  expect(
    screen.getByText('Intern Dashboard')
  ).toBeInTheDocument()
})

/*
Manually wrapping Navbar with ThemeProvider and using customRender
are functionally equivalent because both provide the required theme
context to Navbar.

customRender is preferred in a real project because the provider
setup is defined in one reusable place. This avoids repeating the
same provider wrappers in every test and makes tests cleaner and
easier to maintain.
*/