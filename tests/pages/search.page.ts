import { type Locator, type Page } from "@playwright/test";

export class SearchPage {
  readonly page: Page;
  readonly gamingSubRedditResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.gamingSubRedditResult = page.getByRole("link", { name: /r\/gaming/ })
  }

  async clickGamingSubRedditResult() {
    await this.gamingSubRedditResult.click()
  }
}