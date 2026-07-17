import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import { useInterns } from './intern-context'

function TestComponent() {
  useInterns()
  return null
}

test('throws an error when useInterns is used outside InternProvider', () => {
  expect(() => render(<TestComponent />)).toThrow(
    'useInterns must be used inside InternProvider'
  )
})