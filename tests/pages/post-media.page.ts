import { type Locator, type Page } from "@playwright/test";

export class PostMediaPage {
  readonly page: Page;
  readonly viewPostButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewPostButton = page.locator('a[data-testid="view-post-button"]')
  }

  async doesViewPostButtonExist() {
    return await this.viewPostButton.count() > 0;
  }

  async clickViewPostButton() {
    await this.viewPostButton.click();
  }
}
