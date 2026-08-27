import { test, expect } from "@e2e/fixtures/test.fixture";
import { Logger } from "@e2e/utils/logger.util";

test.describe("Negative UI & Edge Case Tests", () => {

  test("1. Should accurately register rapid consecutive button clicks without dropping count", async ({
    catalogPage,
    productDetailPage,
  }) => {
    Logger.step("Navigate to catalog and select first product");
    await catalogPage.goto();
    await catalogPage.selectProductById(1);

    Logger.step("Perform rapid consecutive clicks on Add to Cart button");
    const addToCartBtn = productDetailPage.addToCartBtn;
    await addToCartBtn.click({ clickCount: 5, delay: 50 });

    Logger.step("Assert UI badge accurately reflects all 5 clicks");
    await productDetailPage.verifyCartCount(5);
  });

  test("2. Should render error UI state when navigating directly to non-existent product ID", async ({ page }) => {
    Logger.step("Navigate directly to an out-of-bounds product URL path");
    await page.goto("/products/xyz");

    Logger.step("Assert UI fallback error container is displayed");
    const errorState = page.getByTestId("error-state");
    await expect(errorState).toBeVisible();
    await expect(errorState).toHaveText("Failed to load product details.");
  });

  test("3. Should maintain empty cart UI state when using browser history navigation", async ({
    catalogPage,
    productDetailPage,
    page,
  }) => {
    Logger.step("Navigate to product detail page and add an item");
    await catalogPage.goto();
    await catalogPage.selectProductById(1);
    await productDetailPage.addToCart(1);
    await productDetailPage.verifyCartCount(1);

    Logger.step("Clear cart state and verify reset");
    await productDetailPage.clearCart();
    await productDetailPage.verifyCartCount(0);

    Logger.step("Trigger browser BACK button to navigate to catalog");
    await page.goBack();
    await catalogPage.verifyCartCount(0);

    Logger.step("Trigger browser FORWARD button to return to product detail page");
    await page.goForward();
    await productDetailPage.verifyCartCount(0);
  });

});