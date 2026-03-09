import { type Locator, type Page } from "@playwright/test";

export class SubRedditPage {
  readonly page: Page;
  readonly secondRedditPost: Locator;

  constructor(page: Page) {
    this.page = page;
    this.secondRedditPost = page.locator('.thing:not(.stickied)').nth(1);
  }

  async click2ndPost() {
    await this.secondRedditPost.click();
  }

  async post2ndPostContains(substring: string) {
    const text = await this.secondRedditPost.innerText();
    return text.toLowerCase().includes(substring.toLowerCase());
  }
}