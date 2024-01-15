import { test } from "@playwright/test";

test.skip("Skipped Test", async ({ page }) => {
  console.log("I am a Skipped Test");
});

test("Skip in WebKit", async ({ page, browserName }) => {
  test.skip(browserName === "webkit", "Skipped in WebKit");
  console.log("I am Skipped with a condition");
});

// test("Not Yet Ready Test", async ({ page }) => {
//   test.fail();
//   console.log("I am a Failed Test");
// });

test("Fail in WebKit", async ({ page, browserName }) => {
  test.fail(browserName === "webkit", "Skipped in WebKit");
  console.log("I am Failed with a condition");
});

test.fixme("Fix Me Test", async () => {
  console.log("I am a Fixme Test");
});

test.only("Slow Test", async () => {
  console.log("I am a Slow Test");
  test.slow();
});

test("Slow Test with condition", async ({ browserName }) => {
  test.slow(browserName === "webkit", "Slow in WebKit");
});
