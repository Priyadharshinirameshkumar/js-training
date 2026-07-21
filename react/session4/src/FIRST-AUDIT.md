# FIRST Principles Audit

| File | Fast? | Independent? | Repeatable? | Self-validating? | Timely? |
|------|:-----:|:------------:|:-----------:|:----------------:|:-------:|
| useInternForm.test.ts | ✅ | ✅ | ✅ | ✅ | ✅ |
| ThemedCard.test.tsx | ✅ | ✅ | ✅ | ✅ | ✅ |
| SummaryBar.test.tsx | ✅ | ✅ | ✅ | ✅ | ✅ |

/*
Improvement

The ScoreStats async tests were improved by waiting for the loading
state to finish before verifying the statistics.

This makes the tests more reliable and repeatable because assertions
are executed only after the component finishes rendering.
*/

explore 1
Running

npx vitest run --reporter verbose

shows each individual test name and whether it passed or failed.

Compared with npm test, the verbose reporter provides more detailed
execution information, making debugging easier.

explore 2 Setting

coverage: {
  thresholds: {
    branches: 80,
  },
}

causes the coverage run to fail if branch coverage drops below 80%.

This helps maintain good testing quality over time.

explore 3
When expect.hasAssertions() is added and every expect() statement is
removed, Vitest reports that no assertions were executed.

This prevents tests from passing accidentally.

explore 4 
Hovering over a red line in the HTML coverage report shows why that
line was not executed and identifies the missing branch or statement
that still requires a test.