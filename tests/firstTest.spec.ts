import { test, expect } from "@playwright/test";

test("MyFirst Test", async ({ page, context }) => {
  await context.tracing.start({ snapshots: true, screenshots: true });

  await page.goto("https://www.google.com/");

  await expect(page).toHaveTitle("Googl");

  await context.tracing.stop({ path: "traceTest.zip" });
});
