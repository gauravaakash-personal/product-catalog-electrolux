import { test, expect } from "@e2e/fixtures/test.fixture";

test("Should display error state when backend catalog API fails (500)", async ({ page, catalogPage }) => {
  // Intercept API call and force a 500 error response
  await page.route("https://dummyjson.com/products", async (route) => {
    await route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ message: "Internal Server Error" }),
    });
  });

  await catalogPage.goto();

  // Assert UI handles failure gracefully without crashing
  const errorMsg = page.getByTestId("error-state");
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toHaveText("Failed to load product catalog.");
});

test("Should accurately register rapid consecutive button clicks without dropping count", async ({
    catalogPage,
    productDetailPage,
  }) => {
    await catalogPage.goto();
    await catalogPage.selectProductById(1);

    // Perform 5 rapid consecutive UI clicks
    const addToCartBtn = productDetailPage.addToCartBtn;
    await addToCartBtn.click({ clickCount: 5, delay: 50 });

    // Assert UI badge accurately reflects all 5 clicks
    await productDetailPage.verifyCartCount(5);
  });

  test("Should render error UI state when navigating directly to non-existent product ID", async ({ page }) => {
    // Navigate directly to an out-of-bounds product path
    await page.goto("/products/invalid-id-xyz-99999");

    // Assert UI fallback error container is displayed
    const errorState = page.getByTestId("error-state");
    await expect(errorState).toBeVisible();
    await expect(errorState).toHaveText("Failed to load product details.");
  });

  test("Should maintain empty cart UI state when using browser history navigation", async ({
    catalogPage,
    productDetailPage,
    page,
  }) => {
    await catalogPage.goto();
    await catalogPage.selectProductById(1);
    
    // Add item and then clear cart
    await productDetailPage.addToCart(1);
    await productDetailPage.verifyCartCount(1);
    await productDetailPage.clearCart();
    await productDetailPage.verifyCartCount(0);

    // Trigger browser back button to return to catalog
    await page.goBack();
    await catalogPage.verifyCartCount(0);

    // Trigger browser forward button to return to product detail page
    await page.goForward();
    await productDetailPage.verifyCartCount(0);
  });



