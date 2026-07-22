import { type Locator, type Page } from '@playwright/test';

// The Page Object Model (POM) centralizes all page locators and actions
// in one place. If the React component changes (for example, the
// "Name" placeholder is renamed to "Intern Name"), only this file needs
// to be updated. All tests that use DashboardPage continue to work
// without modifying each individual test.

export class DashboardPage {
  readonly page: Page;
  readonly form: Locator;

  readonly nameInput: Locator;
  readonly scoreInput: Locator;
  readonly roleSelect: Locator;
  readonly addButton: Locator;
  readonly resetButton: Locator;
  readonly searchInput: Locator;
  readonly themeToggle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.form = page.getByTestId('add-intern-form');

    this.nameInput = this.form.getByPlaceholder('Name');
    this.scoreInput = this.form.getByPlaceholder('Score');
    this.roleSelect = this.form.locator('select[name="role"]');

    this.addButton = this.form.getByRole('button', {
      name: 'Add Intern',
    });

    this.resetButton = this.form.getByRole('button', {
      name: 'Reset',
    });

    this.searchInput = page.getByPlaceholder('Search by name...');

    this.themeToggle = page.getByRole('button', {
      name: /switch to/i,
    });
  }

  async goto() {
    await this.page.goto('/');
  }

  async addIntern(
    name: string,
    score: string,
    role = 'Frontend'
  ) {
    await this.nameInput.fill(name);

    await this.scoreInput.clear();
    await this.scoreInput.fill(score);

    await this.roleSelect.selectOption(role);

    await this.addButton.click();
  }

  async search(query: string) {
    await this.searchInput.fill(query);
  }

  async clearSearch() {
    await this.searchInput.clear();
  }

  async toggleTheme() {
    await this.themeToggle.click();
  }

  internCard(name: string): Locator {
    return this.page
      .getByTestId('intern-card')
      .filter({ hasText: name });
  }

  removeButtonFor(name: string): Locator {
    return this
      .internCard(name)
      .getByRole('button', {
        name: 'Remove',
      });
  }

  get internCount(): Locator {
    return this.page.getByRole('button', {
      name: 'Remove',
    });
  }
  // Playwright's or() locator combinator creates a locator that matches
// either of the provided locators. It is useful when an application may
// display the same element in different ways, such as an error message
// rendered with role="alert" in one version and a CSS class like
// ".error" in another. The test can use a single locator without
// knowing which implementation is currently being used.

validationError(): Locator {
  return this.page
    .getByRole('alert')
    .or(this.page.locator('[class*="error"]'));
}
}