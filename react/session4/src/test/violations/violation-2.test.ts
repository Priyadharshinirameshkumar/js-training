import { test, expect } from 'vitest'

test.skip("score report has today's date", () => {
  const report = {
    date: new Date().toISOString().slice(0, 10),
  }

  expect(report.date).toBe('2024-11-15')
})

/*
FIRST Principle Violated:
Repeatable

This test depends on the current system date.
It passes only on 2024-11-15 and fails on any other day.
*/