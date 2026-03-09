import { Page } from "@playwright/test";

export async function dropSession(page: Page) {
  await page.context().clearCookies({ name: "reddit_session" });
  await page.reload();
}
