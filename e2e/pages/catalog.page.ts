import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class CatalogPage extends BasePage {
  readonly productGrid: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.productGrid = page.getByTestId("product-grid");
    this.pageTitle = page.locator("h1");
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async selectProductById(productId: number): Promise<void> {
    const viewDetailsBtn = this.page.getByTestId(`view-details-${productId}`);
    await viewDetailsBtn.click();
  }

  async getProductCard(productId: number): Promise<Locator> {
    return this.page.getByTestId(`product-card-${productId}`);
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.pageTitle).toHaveText("Product Catalog");
    await expect(this.productGrid).toBeVisible();
  }
}