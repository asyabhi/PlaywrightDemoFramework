import { test } from "@playwright/test";

test.describe("Suite", () => {
  test.beforeAll(async () => {
    console.log("Database Connection Setup");
  });

  test.beforeEach(async () => {
    console.log("Clearing Cookies");
  });

  test.afterEach(async () => {
    console.log("Cache Removal");
  });

  test.afterAll(async () => {
    console.log("Database Connection Disconnect");
  });

  test("Test 1", async () => {
    console.log("Test 1 Block");
  });

  test("Test 2", async () => {
    console.log("Test 2 Block");
  });
});

test("Test 3", async () => {
  console.log("Test 3 Block");
});

test("Test 4", async () => {
  console.log("Test 4 Block");
});
