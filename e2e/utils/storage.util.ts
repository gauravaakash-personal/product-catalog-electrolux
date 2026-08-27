import { Page } from "@playwright/test";

export class StorageUtil {
  static async clearLocalStorage(page: Page): Promise<void> {
    await page.evaluate(() => localStorage.clear());
  }

  static async seedCart(page: Page, cartItems: object[]): Promise<void> {
    await page.evaluate((items) => {
      localStorage.setItem("app_cart", JSON.stringify(items));
    }, cartItems);
  }
}