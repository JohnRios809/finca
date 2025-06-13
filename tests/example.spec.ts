import { test, expect } from "@playwright/test";

test.describe("User to go to fincaraiz.com.co", async () => {
  test("User to go to fincaraiz.com.co", async ({ page }) => {
    test.step("user go to url", async () => {
      await page.goto("https://www.fincaraiz.com.co/");
    });

    await test.step("then the user can see the page", async () => {
      await expect(page).toHaveTitle(/Fincaraiz/);
    });
  });

  test("get started link", async ({ page }) => {
    await test.step("user go to url", async () => {
      await page.goto("https://www.fincaraiz.com.co/");
    });

    await test.step("then the user can see the page", async () => {
      await expect(page).toHaveTitle(/Fincaraiz/);
    });
  });
});
