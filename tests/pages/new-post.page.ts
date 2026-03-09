import { type Locator, type Page } from "@playwright/test";

export class NewPostPage {
  readonly page: Page;
  readonly downVote: Locator;
  readonly upVote: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downVote = page.getByRole('button', { name: 'Downvote' });
    this.upVote = page.getByRole('button', { name: 'Upvote' });
  }

  async clickDownVote() {
    await this.downVote.click();
  }

  async clickUpVote() {
    await this.upVote.click();
  }
}