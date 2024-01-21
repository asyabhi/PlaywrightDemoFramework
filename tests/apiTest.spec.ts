import { test, expect } from "@playwright/test";

var userId;

test("Get user details using GET API", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  var responseJson = await response.json();
  console.log(responseJson);

  expect(response.status()).toBe(200);
  expect(responseJson.data[0].first_name).toBe("Michael");
});

test.only("Get user details using POST API", async ({ request }) => {
  var user = {
    name: "playwright",
    job: "udemy",
  };
  const response = await request.post("https://reqres.in/api/users", {
    data: user,
    headers: { ACCEPT: "application/JSON" },
  });
  var responseJson = await response.json();
  console.log(responseJson);

  expect(response.status()).toBe(201);
  expect(responseJson.name).toBe(`${user.name}`);
  expect(responseJson.job).toBe(`${user.job}`);
  userId = responseJson.id;
  console.log(userId);
});

test.only("Update user details using PUT API", async ({ request }) => {
  var user = {
    name: "automation",
    job: "course",
  };
  const response = await request.put("https://reqres.in/api/users/" + userId, {
    data: user,
    headers: { ACCEPT: "application/JSON" },
  });
  var responseJson = await response.json();
  console.log(responseJson);

  expect(response.status()).toBe(200);
  expect(responseJson.name).toBe(`${user.name}`);
  expect(responseJson.job).toBe(`${user.job}`);
});

test.only("Delete user details using DELETE API", async ({ request }) => {
  const response = await request.delete(
    "https://reqres.in/api/users/" + userId
  );

  expect(response.status()).toBe(204);

  const reponse2 = await request.get("https://reqres.in/api/users/" + userId);
  console.log(await reponse2.json());
});
