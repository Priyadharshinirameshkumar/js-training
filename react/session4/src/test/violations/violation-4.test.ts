import { test, expect } from 'vitest'

test.skip('loads interns from API', async () => {
  const response = await fetch(
    'http://localhost:5173/api/interns'
  )

  const data = await response.json()

  expect(data).toHaveLength(4)
})

/*
FIRST Principles Violated:

Fast
Repeatable

The test depends on an external server.
It will fail in CI or whenever the API is unavailable.
External network requests also make tests slower.
*/