import { test, expect } from '@playwright/test';

test.describe('Locator Chaining and Filtering', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test("finds Rahul's Remove button using filter", async ({ page }) => {
    const rahulCard = page
      .locator('div')
      .filter({ hasText: 'Rahul' })
      .last();

    await expect(
      rahulCard.getByRole('button', { name: 'Remove' })
    ).toBeVisible();
  });
// Why use filter({ hasText: 'Priya' }) instead of .nth(1)?
// filter() finds the row based on its content, so it still works even if the
// row order changes. Using .nth(1) depends on the second row always being Priya,
// which can break if rows are added, removed, or reordered.
  test("finds Priya's score using filter and chaining", async ({ page }) => {
    const priyaCard = page
      .locator('div')
      .filter({ hasText: 'Priya' })
      .last();

    await expect(priyaCard).toContainText('78');
  });
test('counts only the intern cards that contain a Remove button', async ({ page }) => {
  const internCards = page.getByTestId('intern-card').filter({
    has: page.getByRole('button', { name: 'Remove' }),
  });

  await expect(internCards).toHaveCount(4);
});

test("finds Rahul's intern card using filter({ has })", async ({ page }) => {
  const rahulCard = page.getByTestId('intern-card').filter({
    has: page.getByText('Rahul'),
  });

  await expect(rahulCard).toHaveCount(1);
});

// .first() and .nth() depend on the order of elements.
// If the list order changes because of sorting, filtering,
// or adding/removing items, these locators may point to a
// different element. They should be used only when the
// order is stable or when no better unique locator exists.
test('first Remove button belongs to the first intern', async ({ page }) => {
  const firstRemove = page.getByRole('button', { name: 'Remove' }).first();

  await expect(firstRemove).toBeVisible();
});

test('last Remove button belongs to the last intern', async ({ page }) => {
  const lastRemove = page.getByRole('button', { name: 'Remove' }).last();

  await expect(lastRemove).toBeVisible();
});

test('second intern card is accessible by index', async ({ page }) => {
  const secondCard = page.getByTestId('intern-card').nth(1);

  await expect(secondCard).toBeVisible();
});

test('remove the first intern using first()', async ({ page }) => {
  const removeButtons = page.getByRole('button', { name: 'Remove' });

  await removeButtons.first().click();

  await expect(removeButtons).toHaveCount(3);
});
});

test.describe('Scoped Locators', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });


  // Scoped locators search only inside a specific element.
// This is useful when a page contains repeated structures
// like multiple intern cards with similar buttons or text.
// Scoping avoids matching the wrong card and makes tests
// more accurate and easier to maintain.
  test("asserts score and Remove button inside Rahul's card only", async ({ page }) => {

    const rahulCard = page
      .getByTestId('intern-card')
      .filter({ hasText: 'Rahul' });

    await expect(rahulCard.getByText('92')).toBeVisible();

    await expect(
      rahulCard.getByRole('button', { name: 'Remove' })
    ).toBeVisible();
  });

  test('asserts different data in two different cards', async ({ page }) => {

    const rahulCard = page
      .getByTestId('intern-card')
      .filter({ hasText: 'Rahul' });

    const amitCard = page
      .getByTestId('intern-card')
      .filter({ hasText: 'Amit' });

    await expect(
      rahulCard.getByText('92')
    ).toBeVisible();

    await expect(
      amitCard.getByText('45')
    ).toBeVisible();
  });

// Scoping locators to a form prevents accidentally interacting with
// inputs or buttons that have the same names elsewhere on the page.
// It also makes tests more reliable when multiple forms or sections
// contain similar controls.
  test('fills the form using scoped locators on the form container', async ({ page }) => {

  const form = page.getByTestId('add-intern-form');

  await form.getByPlaceholder('Name').fill('Vikram');

  await form.getByPlaceholder('Score').fill('75');

  await form.locator('input[name="isPresent"]').check();

  await form.locator('select').selectOption('Backend');

  await form.getByRole('button', { name: 'Add Intern' }).click();

  await expect(page.getByText('Vikram')).toBeVisible();
});

// selectOption({ label: 'Backend' }) selects an option based on the
// text visible to the user.
// selectOption('Backend') selects an option using its value attribute.
// Selecting by label is often more user-focused because it matches what
// users see, while selecting by value is useful when option values are
// stable and intentionally defined in the HTML.
test.describe('Actions', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('fill sets the input value directly', async ({ page }) => {
    await page.getByPlaceholder('Name').fill('Vikram');

    await expect(page.getByPlaceholder('Name')).toHaveValue('Vikram');
  });

  test('selectOption selects by visible label text', async ({ page }) => {
    await page
      .getByRole('combobox', { name: 'Role' })
      .selectOption({ label: 'Backend' });

    await expect(
      page.getByRole('combobox', { name: 'Role' })
    ).toHaveValue('Backend');
  });

  test('selectOption selects by value attribute', async ({ page }) => {
    await page
      .getByRole('combobox', { name: 'Role' })
      .selectOption('Frontend');

    await expect(
      page.getByRole('combobox', { name: 'Role' })
    ).toHaveValue('Frontend');
  });

});
// check() and uncheck() ensure the checkbox ends up in the
// desired state. Using click() simply toggles the checkbox.
// If the checkbox is already checked, clicking it would
// uncheck it, which can make tests unreliable.
test('checkbox is checked by default', async ({ page }) => {
  const presentCheckbox = page.locator('input[name="isPresent"]');

  await expect(presentCheckbox).toBeChecked();
});

test('uncheck removes the checked state', async ({ page }) => {
  const presentCheckbox = page.locator('input[name="isPresent"]');

  await presentCheckbox.uncheck();

  await expect(presentCheckbox).not.toBeChecked();
});

test('check re-applies the checked state', async ({ page }) => {
  const presentCheckbox = page.locator('input[name="isPresent"]');

  await presentCheckbox.uncheck();
  await presentCheckbox.check();

  await expect(presentCheckbox).toBeChecked();
});

// locator.press('Tab') sends the key press to that specific element.
// page.keyboard.press('Tab') sends the key press to whichever element
// currently has keyboard focus on the page.
test('Tab moves focus from name input to score input', async ({ page }) => {
  const nameInput = page.getByPlaceholder('Name');
  const scoreInput = page.getByPlaceholder('Score');

  await nameInput.focus();
  await expect(nameInput).toBeFocused();

  await page.keyboard.press('Tab');

  await expect(scoreInput).toBeFocused();
});

test('Enter key is accepted in the Name input', async ({ page }) => {
  const nameInput = page.getByPlaceholder('Name');

  await nameInput.fill('Vikram');

  await nameInput.press('Enter');

  await expect(nameInput).toHaveValue('Vikram');
});
// type() enters text one character at a time and triggers
// keyboard/input events for each keystroke.
// fill() replaces the entire input value at once.
// type() is useful for live search, autocomplete, or suggestions
// because those features react to every key press.
test('clear() resets the score input', async ({ page }) => {
  const scoreInput = page.getByPlaceholder('Score');

  await scoreInput.fill('92');
  await scoreInput.clear();

  // In this application, clearing a number input resets it to "0"
  await expect(scoreInput).toHaveValue('0');
});

test('type() fires individual key events', async ({ page }) => {
  const searchInput = page.getByPlaceholder('Search by name...');

  await searchInput.type('Rah');

  // Scope the assertion to the search results list
  await expect(
    page.locator('ul').getByText('Rahul | Frontend | 92')
  ).toBeVisible();
});
});

test('debug: inspect form state mid-test', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Name').fill('Debug Intern');

  await page.pause();

  await page.getByRole('button', { name: 'Add Intern' }).click();

  await expect(page.getByText('Debug Intern')).toBeVisible();
});