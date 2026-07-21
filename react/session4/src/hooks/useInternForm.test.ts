import { renderHook, act } from '@testing-library/react'
import { test, expect } from 'vitest'
import type React from 'react'
import useInternForm from './useInternForm'

test('initialises with empty form state', () => {
    expect.hasAssertions()
  const { result } = renderHook(() => useInternForm())

  expect(result.current.form.name).toBe('')
  expect(result.current.form.score).toBe(0)
  expect(result.current.form.role).toBe('Frontend')
  expect(result.current.error).toBe('')
})

test('isValid returns false and sets error when name is empty', () => {
    //Arrange
  const { result } = renderHook(() => useInternForm())

  let valid = false
   //Act
  act(() => {
    valid = result.current.isValid()
  })
//Assert
  expect(valid).toBe(false)
  expect(result.current.error).toBe('Name is required')
})
/*
AAA Observation:
Arrange prepares the hook and initial state.
Act performs the validation.
Assert verifies that validation failed and the correct error message was produced.
*/
test('isValid returns true when name and score are valid', () => {
  const { result } = renderHook(() => useInternForm())

  act(() => {
    result.current.handleChange({
      target: {
        name: 'name',
        value: 'Rahul',
        type: 'text',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  act(() => {
    result.current.handleChange({
      target: {
        name: 'score',
        value: '92',
        type: 'number',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  let valid = false

  act(() => {
    valid = result.current.isValid()
  })

  expect(valid).toBe(true)
  expect(result.current.error).toBe('')
})

test('handleReset clears form values and error', () => {
  const { result } = renderHook(() => useInternForm())

  act(() => {
    result.current.handleChange({
      target: {
        name: 'name',
        value: 'Rahul',
        type: 'text',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  act(() => {
    result.current.isValid()
  })

  act(() => {
    result.current.handleReset()
  })

  expect(result.current.form.name).toBe('')
  expect(result.current.form.score).toBe(0)
  expect(result.current.form.role).toBe('Frontend')
  expect(result.current.error).toBe('')
})

/*
Hook tests verify the business logic directly without rendering
the full UI. They are faster, simpler, and isolate the hook's
behavior from the component. Component tests confirm that the UI
works correctly, while hook tests confirm that the underlying
state management and validation logic are correct independently.
*/
test('isValid returns true when name is Sneha and score is 88', () => {
  // Arrange
  const { result } = renderHook(() => useInternForm())

  // Act
  act(() => {
    result.current.handleChange({
      target: {
        name: 'name',
        value: 'Sneha',
        type: 'text',
      },
    } as React.ChangeEvent<HTMLInputElement>)

    result.current.handleChange({
      target: {
        name: 'score',
        value: '88',
        type: 'number',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  let valid = false

  act(() => {
    valid = result.current.isValid()
  })

  // Assert
  expect(valid).toBe(true)
})
test('handleChange updates the name field when called with a name change event', () => {
  // Arrange
  const { result } = renderHook(() => useInternForm())

  // Act
  act(() => {
    result.current.handleChange({
      target: {
        name: 'name',
        value: 'Sneha',
        type: 'text',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  // Assert
  expect(result.current.form.name).toBe('Sneha')
})