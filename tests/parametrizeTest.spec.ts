import { test } from "@playwright/test";

const credentials = [
  {
    username: "Admin",
    password: "admin123",
  },
  {
    username: "Admin123",
    password: "admin12",
  },
];

credentials.forEach((credential) => {
  test(`Login Test with credentials ${credential.username}+${credential.password} for Orange HRM`, async ({
    page,
  }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page
      .locator('input[placeholder="Username"]')
      .fill(credential.username);
    await page
      .locator('input[placeholder="Password"]')
      .fill(credential.password);
    await page.locator('button[type="submit"]').click();

    await page.locator(".oxd-userdropdown-tab").click();
    await page.locator("text=Logout").click();
    await page.close();
  });
});
