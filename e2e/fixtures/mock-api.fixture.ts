import { Page } from "@playwright/test";

export class ApiMockFixture {
  static async mockProductsList(page: Page, mockData: object): Promise<void> {
    await page.route("https://dummyjson.com/products", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockData),
      });
    });
  }
}