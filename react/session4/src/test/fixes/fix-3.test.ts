import { test, expect } from 'vitest'

test('calculates average score correctly', () => {
  const scores = [92, 78, 45, 95]

  const avg =
    scores.reduce((a, b) => a + b, 0) /
    scores.length

  expect(avg).toBe(77.5)
})

/*
Fix:
The test now contains an assertion.
It will fail automatically if the average calculation is incorrect.
*/