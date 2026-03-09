import { type Locator, type Page } from '@playwright/test';

export class SearchComponent {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly searchField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#search input[type="submit"]');
    this.searchField = page.getByRole("textbox", { name: "q" });
  }

  async search(query: string) {
    await this.searchField.fill(query)
    await this.searchButton.click()
  }

}