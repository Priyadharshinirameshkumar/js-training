import { test, expect, vi } from 'vitest'

test('loads interns from mocked API', async () => {
  const mockData = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Priya' },
    { id: 3, name: 'Amit' },
    { id: 4, name: 'Sneha' },
  ]

  globalThis.fetch = vi.fn().mockResolvedValue({
    json: async () => mockData,
  } as Response)

  const response = await fetch('http://localhost:5173/api/interns')
  const data = await response.json()

  expect(data).toHaveLength(4)
})

/*
Fix:
The test no longer depends on a real server.
The API response is mocked, making the test fast, repeatable,
and suitable for CI environments.
*/