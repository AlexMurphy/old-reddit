import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.getByRole("textbox", { name: "username" });
    this.passwordField = page.getByRole("textbox", { name: "password" });
    this.loginButton = page.getByRole("button", { name: "log in" });
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.usernameField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
