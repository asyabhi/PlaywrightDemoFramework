import { test, expect } from "@playwright/test";
import { SignInPage } from "./pages/signInPage";
import { HomePage } from "./pages/homePage";
import { SettingsPage } from "./pages/settingsPage";
import { LandingPage } from "./pages/landingPage";

test("Login Conduit test using POM", async ({ page }) => {
  await page.goto("https://react-redux.realworld.io/");
  const landingPage = new LandingPage(page);
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const settingsPage = new SettingsPage(page);

  await landingPage.clickSignInButton();
  await signInPage.enterEmail("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();

  await page.close();
});
