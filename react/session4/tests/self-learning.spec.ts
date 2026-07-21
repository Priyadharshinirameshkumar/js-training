import { test, expect } from '@playwright/test';

// Difference:
// page.fill() clears the existing value and immediately fills the input.
// page.type() types one character at a time without clearing existing text.
// fill() is preferred for normal form testing, while type() is useful when
// testing typing behaviour, keyboard events, or autocomplete.

test('demonstrates fill vs type', async ({ page }) => {
  await page.goto('/');

  const nameInput = page.getByPlaceholder('Name').first();

  // fill replaces the value
  await nameInput.fill('Rahul');
  await expect(nameInput).toHaveValue('Rahul');

  // type appends text
  await nameInput.type(' Kumar');
  await expect(nameInput).toHaveValue('Rahul Kumar');
});

// page.keyboard.press() simulates a keyboard key press.
// It is useful for testing keyboard navigation, shortcuts,
// and accessibility. Here, pressing Tab moves the focus
// from the Name input to the Score input.


test('moves focus to score input using Tab', async ({ page }) => {
  await page.goto('/');

  const nameInput = page.getByPlaceholder('Name').first();
  const scoreInput = page.getByPlaceholder('Score').first();

  // Focus the name input
  await nameInput.click();

  // Type a name
  await nameInput.fill('Rahul');

  // Press Tab
  await page.keyboard.press('Tab');

  // Score input should now have focus
  await expect(scoreInput).toBeFocused();
});

// page.screenshot() captures the current page as an image.
// It is useful for debugging UI issues, documenting test results,
// and visually verifying that the page looks as expected.

test('takes a screenshot of the dashboard', async ({ page }) => {
  await page.goto('/');

  // Wait until the page is fully loaded
  await expect(
    page.getByRole('heading', { name: 'Intern Dashboard' })
  ).toBeVisible();

  // Save a screenshot
  await page.screenshot({
    path: 'test-results/dashboard-screenshot.png',
    fullPage: true,
  });
});
// test.only()
// Runs only the marked test and ignores all other tests.
// Useful during development or debugging to focus on one test.
//
// test.skip()
// Skips the marked test during execution.
// Useful when a feature is not ready or a test is temporarily disabled.
//
// Important:
// test.only() should never be committed because it prevents the rest
// of the test suite from running, which can hide failures in other tests.