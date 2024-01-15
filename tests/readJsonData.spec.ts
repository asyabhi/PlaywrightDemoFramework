import { test } from "@playwright/test";
import * as orangeHrmData from "./testData/orangeHRMCredentials.json";

test(`Login Test with valid credentials for Orange HRM`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page
    .locator('input[placeholder="Username"]')
    .fill(orangeHrmData.username);
  await page
    .locator('input[placeholder="Password"]')
    .fill(orangeHrmData.password);
  await page.locator('button[type="submit"]').click();

  await page.locator(".oxd-userdropdown-tab").click();
  await page.locator("text=Logout").click();
  await page.close();
});

test(`Login Test with invalid credentials for Orange HRM`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page
    .locator('input[placeholder="Username"]')
    .fill(orangeHrmData.invalidUsername);
  await page
    .locator('input[placeholder="Password"]')
    .fill(orangeHrmData.invalidPassword);
  await page.locator('button[type="submit"]').click();

  await page.locator(".oxd-userdropdown-tab").click();
  await page.locator("text=Logout").click();
  await page.close();
});
