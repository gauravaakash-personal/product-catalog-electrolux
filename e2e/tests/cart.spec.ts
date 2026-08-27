import { test, expect } from "@e2e/fixtures/test.fixture";
import { Logger } from "@e2e/utils/logger.util";

test.describe("Cart Functionality Tests", () => {

  test("Should add items to cart and reset state upon clicking Clear Cart", async ({
    catalogPage,
    productDetailPage,
    page,
  }) => {
    Logger.step("Navigate to product and add items to cart");
    await catalogPage.goto();
    await catalogPage.selectProductById(1);
    await productDetailPage.addToCart(2);
    await productDetailPage.verifyCartCount(2);

    Logger.step("Verify Clear Cart button is visible");
    await productDetailPage.verifyClearCartButtonVisible(true);

    Logger.step("Click Clear Cart button");
    await productDetailPage.clearCart();

    Logger.step("Assert cart count badge resets to 0");
    await productDetailPage.verifyCartCount(0);

    Logger.step("Assert Clear Cart button hides when cart is empty");
    await productDetailPage.verifyClearCartButtonVisible(false);

    Logger.step("Verify localStorage key is cleared or emptied in browser");
    const storedCart = await page.evaluate(() => localStorage.getItem("app_cart"));
    expect(storedCart === null || storedCart === "[]").toBeTruthy();
  });

});