import { type Locator, type Page, expect } from "@playwright/test";

export class ListingPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: /this is your home on Reddit/i, level: 1 });
  }

  async goto() {
    await this.page.goto("/");
  }

  async assertPageLoaded() {
    await expect(this.heading).toBeVisible();
  }
}