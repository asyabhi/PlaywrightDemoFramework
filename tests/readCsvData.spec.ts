import { test } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const orangeHrmData = parse(
  fs.readFileSync(path.join(__dirname, "testData", "orangeHRMCreds.csv")),
  {
    columns: true,
    skip_empty_lines: true,
  }
);

test(`Login Test with valid credentials for Orange HRM`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page
    .locator('input[placeholder="Username"]')
    .fill(orangeHrmData[0].username);
  await page
    .locator('input[placeholder="Password"]')
    .fill(orangeHrmData[0].password);
  await page.locator('button[type="submit"]').click();

  await page.locator(".oxd-userdropdown-tab").click();
  await page.locator("text=Logout").click();
  await page.close();
});

test(`Login Test with invalid credentials for Orange HRM`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page
    .locator('input[placeholder="Username"]')
    .fill(orangeHrmData[1].username);
  await page
    .locator('input[placeholder="Password"]')
    .fill(orangeHrmData[1].password);
  await page.locator('button[type="submit"]').click();

  await page.locator(".oxd-userdropdown-tab").click();
  await page.locator("text=Logout").click();
  await page.close();
});
