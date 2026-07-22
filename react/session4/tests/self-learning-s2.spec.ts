import { test, expect } from '@playwright/test';
import { DashboardPage } from './pages/DashboardPage';

/* ===========================================================
   Self Learning – Playwright Advanced Features
=========================================================== */

/* ===========================================================
1. Soft Assertions
--------------------------------------------------------------
expect.soft() records failures and allows the test to continue.
Unlike a normal expect(), it does not stop the test immediately.

Soft assertions are useful for smoke tests where we want to
verify many UI elements at once and collect all failures before
the test ends.
=========================================================== */

test('Soft Assertion Smoke Test', async ({ page }) => {

  await page.goto('/');

  await expect.soft(
    page.getByRole('heading', { name: 'Intern Dashboard' })
  ).toBeVisible();

  await expect.soft(
    page.getByRole('button', { name: 'Add Intern' })
  ).toBeVisible();

  await expect.soft(
    page.getByPlaceholder('Search by name...')
  ).toBeVisible();

  await expect.soft(
    page.getByTestId('intern-card')
  ).toHaveCount(4); 
});


/* ===========================================================
2. page.route()
--------------------------------------------------------------
page.route() intercepts network requests and allows Playwright
to return mock responses instead of contacting a real server.

This example assumes the application fetches interns from
/api/interns. If your current project uses React Context with
local data, this test is only a learning example until a backend
is added.
=========================================================== */

test('Mock API using page.route()', async ({ page }) => {

  await page.route('**/api/interns', async route => {

    await route.fulfill({

      status: 200,

      contentType: 'application/json',

      body: JSON.stringify([
        {
          id: 1,
          name: 'Mock Intern',
          score: 99,
          role: 'Frontend',
          isPresent: true,
        },
      ]),

    });

  });

  await page.goto('/');

  // Works only after your app starts loading interns from /api/interns.
});


/* ===========================================================
3. Page Object Model Example
--------------------------------------------------------------
Fixtures created with test.extend() are reusable and automatically
available to every test.

Unlike beforeEach(), fixtures can return prepared objects and
can be shared between tests.
=========================================================== */

test.describe('Dashboard using Page Object', () => {

  let dashboard: DashboardPage;

  test.beforeEach(async ({ page }) => {

    dashboard = new DashboardPage(page);

    await dashboard.goto();

  });

  test('Add Intern using Page Object', async () => {

    await dashboard.addIntern(
      'Fixture Intern',
      '90',
      'Backend'
    );

    await expect(
      dashboard.internCard('Fixture Intern')
    ).toBeVisible();

  });

});


/* ===========================================================
4. Screenshot Testing
--------------------------------------------------------------
toHaveScreenshot() compares the current UI with a stored baseline
image. If the UI changes unexpectedly, Playwright reports the
difference.
=========================================================== */
test('Screenshot comparison', async ({ page, browserName }) => {

  test.skip(
    browserName !== 'chromium',
    'Screenshot baseline only for Chromium'
  );

  await page.goto('/');

  await expect(page).toHaveScreenshot(
    'dashboard-before.png'
  );

  const dashboard = new DashboardPage(page);

  await dashboard.addIntern(
    'Visual Test',
    '95',
    'Frontend'
  );

  await expect(page).toHaveScreenshot(
    'dashboard-after.png'
  );

});

/* ===========================================================
5. page.evaluate()
--------------------------------------------------------------
page.evaluate() executes JavaScript inside the browser.

It is useful for reading values directly from the DOM,
window object, localStorage, sessionStorage or computed styles.

Your current project changes themes using inline styles instead
of CSS variables. Therefore this example simply reads the body's
background color before and after toggling the theme.
=========================================================== */
test('Read style using page.evaluate()', async ({ page }) => {

  await page.goto('/');

  await page.waitForSelector('[data-testid="intern-card"]');

  const card = page.getByTestId('intern-card').first();

  const before = await card.evaluate((element) => {
    return getComputedStyle(element).backgroundColor;
  });

  await page.getByRole(
    'button',
    { name: /switch to dark mode/i }
  ).click();

  const after = await card.evaluate((element) => {
    return getComputedStyle(element).backgroundColor;
  });

  expect(before).not.toBe(after);

});