import { test, expect } from '@playwright/test';

test.describe('Intern Dashboard', () => {

  // Navigate to the home page before every test.
  // This ensures each test starts from the same initial state.
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  
  test('shows the page title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Intern Dashboard' })
    ).toBeVisible();
  });
  // Difference:
// Playwright's toBeVisible() checks that an element exists
// and is visible to the user.
//
// React Testing Library's toBeInTheDocument()
// only checks that the element exists in the DOM.
// It may still be hidden from the user.
  test('shows the initial intern names', async ({ page }) => {
  await expect(page.getByText('Rahul').first()).toBeVisible();
await expect(page.getByText('Priya').first()).toBeVisible();
await expect(page.getByText('Amit').first()).toBeVisible();
await expect(page.getByText('Sneha').first()).toBeVisible();
});

test('shows the correct number of intern cards', async ({ page }) => {
  // Each card has a Remove button — count them to count the cards
  await expect(
    page.getByRole('button', { name: 'Remove' })
  ).toHaveCount(4);
});

test('shows the theme toggle button', async ({ page }) => {
  await expect(
    page.getByRole('button', { name: /switch to dark mode/i })
  ).toBeVisible();
});

});
// getByRole() is the preferred locator because it finds elements
// the same way users and assistive technologies do.
//
// Unlike getByTestId(), it encourages accessible applications
// and produces tests that are more resilient to UI changes.
test.describe('Locator Practice — getByRole', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('finds the Add Intern button by role', async ({ page }) => {
    const addButton = page.getByRole('button', { name: 'Add Intern' });
    await expect(addButton).toBeVisible();
  });

  test('finds the heading by role', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Intern Dashboard' });
    await expect(heading).toBeVisible();
  });

  test('finds the name input by role', async ({ page }) => {
    // A text input has role 'textbox'
    const nameInput = page.getByRole('textbox', { name: 'Name' });
    await expect(nameInput).toBeVisible();
  });
// toBeEmpty() verifies that an input field contains no value.
// It is useful for checking that a form starts in its initial empty state.
  test('finds the name input by placeholder', async ({ page }) => {
  const nameInput = page.getByPlaceholder('Name');

  await expect(nameInput).toBeVisible();

  await expect(nameInput).toBeEmpty();
});

test('finds the score input by placeholder', async ({ page }) => {
  const scoreInput = page.getByPlaceholder('Score');

  await expect(scoreInput).toBeVisible();
});
// .first() is used because the regular expression can match
// multiple score elements on the page. Playwright requires
// a single element for assertions, so .first() selects the
// first matching element.

test('finds text with exact matching', async ({ page }) => {
  await expect(page.getByText('Rahul').first()).toBeVisible();
});
// .first() is used because the regular expression may match
// multiple elements on the page. Playwright requires a single
// element for assertions, so .first() selects the first match.

test('finds text with regex matching', async ({ page }) => {
  // Matches names followed by any numeric score.
  await expect(
    page.getByText(/Rahul.*92|Priya.*78|Amit.*45|Sneha.*95/).first()
  ).toBeVisible();
});

test('asserts that an absent element is not visible', async ({ page }) => {
  // Nobody named "Placeholder" exists in the initial list.
  await expect(page.getByText('Placeholder')).not.toBeVisible();
});

});

// Difference:
// toHaveText() checks that the element's text exactly matches
// the expected value.

// toContainText() checks only that the expected text is present
// somewhere inside the element, even if there is additional text.
test.describe('Assertions', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('heading has the correct text', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Intern Dashboard' })
    ).toHaveText('Intern Dashboard');
  });

  test('theme toggle button contains the word "Dark"', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: /switch to dark mode/i })
    ).toContainText('Dark');
  });

  test('error message is not visible initially', async ({ page }) => {
    await expect(
      page.getByText('Name is required')
    ).not.toBeVisible();
  });

  test('name input is empty initially', async ({ page }) => {
  await expect(page.getByPlaceholder('Name')).toHaveValue('');
});

test('score input is 0 initially', async ({ page }) => {
  await expect(page.getByPlaceholder('Score')).toHaveValue('0');
});

// When expecting 5 buttons instead of 4, Playwright automatically
// waited for about 5 seconds before failing. The error message
// clearly showed the expected count (5) and the actual count (4),
// making it easy to identify why the assertion failed.
test('correct number of Remove buttons matches the intern count', async ({ page }) => {
  await expect(
    page.getByRole('button', { name: 'Remove' })
  ).toHaveCount(4);
});
});

test.describe('Add Intern Journey', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // This E2E test verifies the complete user journey.
  // Unlike a unit test, it confirms that filling the real form,
  // clicking the real button, updating the context, and rendering
  // the updated list all work together correctly in the browser.
  test('adds a new intern and shows them in the list', async ({ page }) => {

    await page.getByPlaceholder('Name').fill('Vikram');

    await page.getByPlaceholder('Score').clear();
    await page.getByPlaceholder('Score').fill('88');

    await page.getByRole('button', { name: 'Add Intern' }).click();

    await expect(page.getByText('Vikram').first()).toBeVisible();

    // Verify the score appears with the new intern.
    await expect(page.getByText(/88/).first()).toBeVisible();

  });
// This end-to-end test validates the complete workflow.
// It verifies that entering data into the form, clicking
// the Add Intern button, updating the application state,
// and displaying the new intern in the UI all work together.
// A unit test for AddInternForm can verify the form logic,
// but it cannot verify that the complete application flow
// works correctly in the browser.
  test('intern count increases after adding', async ({ page }) => {

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(4);

    await page.getByPlaceholder('Name').first().fill('Vikram');
    await page.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(5);

  });

  test('form clears after successful submission', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Vikram');

    await page.getByPlaceholder('Score').clear();
    await page.getByPlaceholder('Score').fill('88');

    await page.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      page.getByPlaceholder('Name')
    ).toHaveValue('');

  });

  test('shows validation error when name is empty', async ({ page }) => {
  // Click submit without filling in the name
  await page.getByRole('button', { name: 'Add Intern' }).click();

  await expect(page.getByText('Name is required')).toBeVisible();
});

test('does not add intern when form is invalid', async ({ page }) => {
  await page.getByRole('button', { name: 'Add Intern' }).click();

  // Intern count should remain 4 — the invalid form was not submitted
  await expect(
    page.getByRole('button', { name: 'Remove' })
  ).toHaveCount(4);
});

test('validation error disappears after name is entered', async ({ page }) => {
  await page.getByRole('button', { name: 'Add Intern' }).click();

  await expect(page.getByText('Name is required')).toBeVisible();
// Playwright's not.toBeVisible() verifies that the element is
// no longer visible to the user. Unlike React Testing Library's
// queryByText(), Playwright automatically waits for the UI to
// update before checking the assertion, making it ideal for
// end-to-end tests.
  // Use the Add Intern form textbox, not the search textbox
  await page
    .getByRole('textbox', { name: 'Name', exact: true })
    .fill('Vikram');

  await expect(page.getByText('Name is required')).not.toBeVisible();
});

// Alternative using locator.filter():
//
// const rahulCard = page
//   .locator('div')
//   .filter({ has: page.getByText('Rahul') });
//
// await rahulCard
//   .getByRole('button', { name: 'Remove' })
//   .click();
//
// locator.filter() filters elements based on their contents,
// avoiding the need to navigate to the parent using locator('..').
test.describe('Remove Intern Journey', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Alternative using locator.filter():
//
// const rahulCard = page
//   .locator('div')
//   .filter({ has: page.getByText('Rahul') });
//
// await rahulCard
//   .getByRole('button', { name: 'Remove' })
//   .click();
//
// locator.filter() can locate a container based on its contents,
// making it more robust than navigating to the parent with locator('..').
test('removes an intern when Remove is clicked', async ({ page }) => {

  // Rahul is initially displayed
  await expect(page.getByText('Rahul').first()).toBeVisible();

  // Remove the first intern
  await page
    .getByRole('button', { name: 'Remove' })
    .first()
    .click();

  // Rahul should no longer be visible
  await expect(page.getByText('Rahul').first()).not.toBeVisible();

});
  test('intern count decreases after removal', async ({ page }) => {

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(4);

    await page
      .getByRole('button', { name: 'Remove' })
      .first()
      .click();

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(3);

  });

});
});


// This Playwright test verifies the complete theme toggle journey
// in a real browser. It confirms that clicking the button updates
// the application state and changes the button label from
// "Switch to Dark Mode" to "Switch to Light Mode" and back.
//
// A Vitest unit test for Navbar can verify the component logic
// in isolation, but it cannot verify the complete browser
// interaction, DOM updates, and state changes working together.
test.describe('Theme Toggle Journey', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('toggle button label changes from Dark to Light after click', async ({ page }) => {

    await expect(
      page.getByRole('button', { name: /switch to dark mode/i })
    ).toBeVisible();

    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .click();

    await expect(
      page.getByRole('button', { name: /switch to light mode/i })
    ).toBeVisible();

  });

  test('toggle switches back on second click', async ({ page }) => {

    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .click();

    await page
      .getByRole('button', { name: /switch to light mode/i })
      .click();

    await expect(
      page.getByRole('button', { name: /switch to dark mode/i })
    ).toBeVisible();

  });

});

// Observation from Playwright UI Mode:
// The Playwright UI displays each browser action in a timeline and
// allows locators to be highlighted directly on the page. This makes
// it much easier to understand exactly which element is being used
// and at which step a test succeeds or fails, something that is not
// as easy to visualize from terminal output alone.


// Observation:
// Running a single browser project or a single test file makes
// development much faster because fewer tests and browsers are
// executed. Multi-browser runs are more useful for CI pipelines
// or final verification before submission.

// Difference between Headless and Headed Mode:
//
// Headless mode runs tests without opening a visible browser window.
// It is faster and is commonly used in CI/CD pipelines and automated testing.
//
// Headed mode opens a real browser window so the tester can watch each
// interaction. It is useful during development and debugging because
// it helps visualize how the application behaves while the tests run.


// Observation from Debug Mode:
// Playwright Inspector executes one action at a time and displays
// the exact locator being used. It highlights matching elements in
// the browser, making it much easier to identify why a locator
// succeeds or fails compared to reading terminal logs alone.