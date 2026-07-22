import { test, expect } from '@playwright/test';
import { DashboardPage } from './pages/DashboardPage';

test.describe('Journeys via Page Object', () => {

  let dashboard: DashboardPage;

  test.beforeEach(async ({ page }) => {
    dashboard = new DashboardPage(page);
    await dashboard.goto();
  });

  // dashboard.themeToggle is initialized in the DashboardPage constructor
  // using a Playwright locator. Calling dashboard.toggleTheme() clicks the
  // same locator. After the click, the button text changes from
  // "Switch to Dark Mode" to "Switch to Light Mode", so checking for
  // "Light" confirms that the theme state has changed successfully.

  test('adds a new intern', async () => {

    await dashboard.addIntern('Vikram', '88', 'Backend');

    await expect(
      dashboard.internCard('Vikram')
    ).toBeVisible();

    await expect(
      dashboard.internCount
    ).toHaveCount(4);

  });

  test('searches and filters the list', async () => {

    await dashboard.search('Rah');

    await expect(
      dashboard.page.locator('ul li')
    ).toHaveCount(1);

    await expect(
      dashboard.page.locator('ul').getByText('Rahul | Frontend | 92')
    ).toBeVisible();

  });

  test('clears search and restores all interns', async () => {

    await dashboard.search('Rahul');

    await dashboard.clearSearch();

    await expect(
      dashboard.page.locator('ul li')
    ).toHaveCount(4);

  });

  test('removes an intern by name', async () => {

    await dashboard.removeButtonFor('Rahul').click();

    await expect(
      dashboard.internCard('Rahul')
    ).toHaveCount(0);

    await expect(
      dashboard.internCount
    ).toHaveCount(3);

  });

  test('toggles theme and button label updates', async () => {

    await dashboard.toggleTheme();

    await expect(
      dashboard.themeToggle
    ).toContainText('Light');

  });
  test('shows validation error on empty submit', async () => {

  await dashboard.addButton.click();

  await expect(
    dashboard.validationError()
  ).toContainText('Name is required');

});
test('chromium-only feature check', async ({ page, browserName }) => {

  test.skip(
    browserName !== 'chromium',
    'This test targets Chromium-specific behaviour only'
  );

  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: 'Intern Dashboard',
    })
  ).toBeVisible();

});
});