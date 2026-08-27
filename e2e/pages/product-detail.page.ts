import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductDetailPage extends BasePage {
  readonly title: Locator;
  readonly price: Locator;
  readonly description: Locator;
  readonly addToCartBtn: Locator;
  readonly backLink: Locator;
  readonly clearCartBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByTestId("product-title");
    this.price = page.getByTestId("product-price");
    this.description = page.getByTestId("product-description");
    this.addToCartBtn = page.getByTestId("add-to-cart-button");
    this.backLink = page.getByTestId("back-button");
    this.clearCartBtn = page.getByTestId("clear-cart-button");
  }

  async addToCart(times: number = 1): Promise<void> {
    for (let i = 0; i < times; i++) {
      await this.addToCartBtn.click();
    }
  }

  async verifyProductDetails(expectedTitle: string): Promise<void> {
    await expect(this.title).toHaveText(expectedTitle);
    await expect(this.price).toBeVisible();
    await expect(this.addToCartBtn).toBeEnabled();
  }

  async verifyClearCartButtonVisible(visible: boolean): Promise<void> {
    if (visible) {
      await expect(this.clearCartBtn).toBeVisible();
    } else {
      await expect(this.clearCartBtn).toBeHidden();
    }
  }

  async clearCart(): Promise<void> {
    await this.clearCartBtn.click();
  }
}