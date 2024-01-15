import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class SignInPage extends BasePage {
  readonly page: Page;
  private readonly emailTextbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailTextbox = page.locator(`input[placeholder='Email']`);
    this.passwordTextbox = page.locator(`input[placeholder='Password']`);
    this.signInButton = page.locator(`button[type='submit']`);
  }

  async enterEmail(email: string) {
    await this.fillElement(this.emailTextbox, email);
  }

  async enterPassword(password: string) {
    await this.fillElement(this.passwordTextbox, password);
  }

  async clickSignInButton() {
    await this.clickElement(this.signInButton);
  }
}
