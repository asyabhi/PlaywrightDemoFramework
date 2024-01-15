import { test, expect } from "../fixtures/pomFixtures";

test("Login Conduit test using POM", async ({
  page,
  landingPage,
  signInPage,
  homePage,
  settingsPage,
}) => {
  await page.goto("https://react-redux.realworld.io/");

  await landingPage.clickSignInButton();
  await signInPage.enterEmail("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();

  await page.close();
});
