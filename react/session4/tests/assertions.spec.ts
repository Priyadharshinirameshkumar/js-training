import { test, expect } from '@playwright/test';
// toBeVisible() only checks that a button is displayed on the page.
// toBeEnabled() verifies that the button is displayed and can actually
// be interacted with. A button may be visible but disabled (for example,
// during form validation or while waiting for data to load). In that
// case, toBeVisible() would pass but toBeEnabled() would fail.
test.describe('Assertions — State', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Add Intern button is enabled', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Add Intern' })
    ).toBeEnabled();
  });

  test('name input is editable', async ({ page }) => {
    await expect(
      page.getByPlaceholder('Name')
    ).toBeEditable();
  });

  test('Present checkbox is checked by default', async ({ page }) => {
    await expect(
      page.getByRole('checkbox', { name: 'Present' })
    ).toBeChecked();
  });

  test('name input receives focus when clicked', async ({ page }) => {
    const nameInput = page.getByPlaceholder('Name');

    await nameInput.click();

    await expect(nameInput).toBeFocused();
  });


// This application changes the theme using inline CSS styles instead
// of adding or removing CSS classes. Therefore, toHaveCSS() is the
// appropriate assertion. If the application used classes such as
// "dark" or "light", toHaveClass() would be the better choice.
  test.describe('Assertions — Attributes and Styles', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Present checkbox has type attribute of checkbox', async ({ page }) => {
    await expect(
      page.getByRole('checkbox', { name: 'Present' })
    ).toHaveAttribute('type', 'checkbox');
  });

  test('navbar changes to dark theme after toggle', async ({ page }) => {
    const navbar = page.locator('nav');

    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .click();

    await expect(navbar).toHaveCSS('background-color', 'rgb(26, 26, 26)');
    await expect(navbar).toHaveCSS('color', 'rgb(255, 255, 255)');
  });

  test('navbar changes back to light theme', async ({ page }) => {
    const navbar = page.locator('nav');

    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .click();

    await page
      .getByRole('button', { name: /switch to light mode/i })
      .click();

    await expect(navbar).toHaveCSS('background-color', 'rgb(245, 245, 245)');
    await expect(navbar).toHaveCSS('color', 'rgb(0, 0, 0)');
  });

});

// Findings:
// • During the first run with --update-snapshots, Playwright captures
//   the page and saves it as the baseline screenshot.
//
// • On subsequent runs, Playwright compares the current page against
//   the saved baseline. If there are no visual differences, the test
//   passes.
//
// • If any visible element changes (text, color, layout, spacing,
//   fonts, etc.), the comparison fails and Playwright generates
//   expected, actual, and diff images to help identify the change.
});
test.describe('Assertions — Page Level', () => {

  test('page has the correct title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Intern Dashboard/);
  });

  test('page URL is the root path', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL('http://localhost:5173/');
  });

  test('matches the intern dashboard screenshot', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveScreenshot('intern-dashboard.png');
  });

});