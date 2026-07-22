import { test, expect } from '@playwright/test';

test.describe('User Journey — Add Intern', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // This end-to-end journey verifies that the complete application works
  // together. Unlike a Vitest unit test, it checks the interaction between
  // the form, React state, context, and the rendered intern list in the
  // browser. It ensures that after submitting the form, the new intern is
  // actually displayed in the UI and the list updates correctly.

  test('user fills the form and the new intern appears in the list', async ({ page }) => {

    const form = page.getByTestId('add-intern-form');

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(4);

    await form.getByPlaceholder('Name').fill('Vikram');

    await form.getByPlaceholder('Score').clear();
    await form.getByPlaceholder('Score').fill('88');

    await form.locator('select[name="role"]').selectOption('Frontend');

    await form.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      page.getByTestId('intern-card').filter({
        hasText: 'Vikram',
      })
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(5);
  });

  test('new intern displays the correct score', async ({ page }) => {

    const form = page.getByTestId('add-intern-form');

    await form.getByPlaceholder('Name').fill('Vikram');

    await form.getByPlaceholder('Score').clear();
    await form.getByPlaceholder('Score').fill('88');

    await form.locator('select[name="role"]').selectOption('Frontend');

    await form.getByRole('button', { name: 'Add Intern' }).click();

    const vikramCard = page
      .getByTestId('intern-card')
      .filter({ hasText: 'Vikram' });

    await expect(vikramCard).toContainText('88');
  });
test('intern with score 45 is displayed correctly', async ({ page }) => {

  const form = page.getByTestId('add-intern-form');

  await form.getByPlaceholder('Name').fill('Ravi');

  await form.getByPlaceholder('Score').fill('45');

  // Verify the score was actually entered before submitting
  await expect(
    form.getByPlaceholder('Score')
  ).toHaveValue('45');

  await form.locator('select[name="role"]').selectOption('Backend');

  await form.getByRole('button', { name: 'Add Intern' }).click();

  const raviCard = page
    .getByTestId('intern-card')
    .filter({ hasText: 'Ravi' });

  await expect(raviCard).toContainText('45');
});

  test('form resets to empty after successful submission', async ({ page }) => {

    const form = page.getByTestId('add-intern-form');

    await form.getByPlaceholder('Name').fill('Vikram');

    await form.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      form.getByPlaceholder('Name')
    ).toHaveValue('');
  });

});
test.describe('User Journey — Add Intern Validation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows error when submitting with empty name', async ({ page }) => {
    const form = page.getByTestId('add-intern-form');

    await form.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      form.getByText('Name is required')
    ).toBeVisible();
  });

  test('does not add intern when name is empty', async ({ page }) => {
    const form = page.getByTestId('add-intern-form');

    await form.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(4);
  });

  test('error clears after entering a valid name and resubmitting', async ({ page }) => {
    const form = page.getByTestId('add-intern-form');

    await form.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      form.getByText('Name is required')
    ).toBeVisible();

    await form.getByPlaceholder('Name').fill('Vikram');

    await form.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      form.getByText('Name is required')
    ).toHaveCount(0);
  });

  test('shows error when score is above 100', async ({ page }) => {
    const form = page.getByTestId('add-intern-form');

    await form.getByPlaceholder('Name').fill('Vikram');

    await form.getByPlaceholder('Score').clear();
    await form.getByPlaceholder('Score').fill('150');

    await form.getByRole('button', { name: 'Add Intern' }).click();

    await expect(
      form.getByText('Score must be 0–100')
    ).toBeVisible();
  });

});
test.describe('User Journey — Search and Filter', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // type() is more realistic because it simulates a user typing one
  // character at a time, firing keyboard and input events for each key.
  // This is useful for search boxes that update results on every keystroke.
  // fill() replaces the entire value at once, which is faster but less
  // representative of real user interaction.
test('typing in search filters the intern list', async ({ page }) => {

  const search = page.getByPlaceholder('Search by name...');

  await search.type('Rah');

  await expect(
    page.locator('ul li')
  ).toHaveCount(1);

  await expect(
    page.locator('ul').getByText('Rahul | Frontend | 92')
  ).toBeVisible();
});
test('clearing search restores all interns', async ({ page }) => {

  const search = page.getByPlaceholder('Search by name...');

  await search.fill('Rahul');

  await expect(
    page.locator('ul li')
  ).toHaveCount(1);

  await search.clear();

  await expect(
    page.locator('ul li')
  ).toHaveCount(4);
});

  test('search is case-insensitive', async ({ page }) => {

  const search = page.getByPlaceholder('Search by name...');

  await search.fill('rahul');

  await expect(
    page.locator('ul li')
  ).toHaveCount(1);

  await expect(
    page.locator('ul').getByText('Rahul | Frontend | 92')
  ).toBeVisible();
});

});
test.describe('User Journey — Remove Intern', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Using the intern card containing Rahul is more reliable than using
  // .first(). The first Remove button may belong to a different intern if
  // the list order changes, new interns are added, or the list is sorted.
  // Scoping the locator to Rahul's card ensures the correct Remove button
  // is clicked regardless of the order of the list.

  test('clicking Remove on Rahul\'s card removes Rahul from the list', async ({ page }) => {

    const rahulCard = page
      .getByTestId('intern-card')
      .filter({ hasText: 'Rahul' });

    await expect(rahulCard).toBeVisible();

    await rahulCard
      .getByRole('button', { name: 'Remove' })
      .click();

    await expect(rahulCard).toHaveCount(0);
  });

  test('intern count decreases after removal', async ({ page }) => {

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(4);

    const rahulCard = page
      .getByTestId('intern-card')
      .filter({ hasText: 'Rahul' });

    await rahulCard
      .getByRole('button', { name: 'Remove' })
      .click();

    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(3);
  });

  test('other interns remain after one is removed', async ({ page }) => {

    const rahulCard = page
      .getByTestId('intern-card')
      .filter({ hasText: 'Rahul' });

    await rahulCard
      .getByRole('button', { name: 'Remove' })
      .click();

    await expect(
      page.getByTestId('intern-card').filter({ hasText: 'Priya' })
    ).toBeVisible();

    await expect(
      page.getByTestId('intern-card').filter({ hasText: 'Amit' })
    ).toBeVisible();

    await expect(
      page.getByTestId('intern-card').filter({ hasText: 'Sneha' })
    ).toBeVisible();
  });

  test('removed intern does not reappear after page interaction', async ({ page }) => {

    const rahulCard = page
      .getByTestId('intern-card')
      .filter({ hasText: 'Rahul' });

    await rahulCard
      .getByRole('button', { name: 'Remove' })
      .click();

    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .click();

    await expect(rahulCard).toHaveCount(0);
  });

});

test.describe('User Journey — Theme Toggle', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // In this application, the theme is controlled by React state and the
  // navbar button text changes from "Switch to Dark Mode" to
  // "Switch to Light Mode". Verifying the button label confirms that the
  // theme state has changed. If the application used CSS classes such as
  // "dark" on the body or root element, the test should instead verify
  // the presence or absence of that class using toHaveClass().

  test('toggle button shows current mode to switch to', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: /switch to dark mode/i })
    ).toBeVisible();
  });

  test('clicking toggle switches to dark mode', async ({ page }) => {
    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .click();

    await expect(
      page.getByRole('button', { name: /switch to light mode/i })
    ).toBeVisible();
  });

  test('clicking toggle again switches back to light mode', async ({ page }) => {
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