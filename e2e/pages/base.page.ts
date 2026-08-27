import { Page, Locator, expect } from "@playwright/test";

export abstract class BasePage {
  readonly page: Page;
  readonly cartCountBadge: Locator;
  readonly homeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartCountBadge = page.getByTestId("cart-count");
    this.homeLink = page.getByTestId("nav-home-link");
  }

  async navigateToHome(): Promise<void> {
    await this.homeLink.click();
    await this.page.waitForURL("/");
  }

  async getCartCount(): Promise<number> {
    const text = await this.cartCountBadge.innerText();
    return parseInt(text.trim(), 10);
  }

  async verifyCartCount(expectedCount: number): Promise<void> {
    await expect(this.cartCountBadge).toHaveText(expectedCount.toString());
  }
}