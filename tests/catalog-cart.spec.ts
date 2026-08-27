import { test, expect } from "@playwright/test";

test.describe("Product Catalog & Cart Application", () => {
  
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test run
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test("1. Catalog Page displays products fetched from API", async ({ page }) => {
    // Verify page heading
    await expect(page.locator("h1")).toHaveText("Product Catalog");

    // Verify grid containers and individual cards load
    const productGrid = page.getByTestId("product-grid");
    await expect(productGrid).toBeVisible();

    const productCards = page.locator('[data-testid^="product-card-"]');
    await expect(productCards.first()).toBeVisible();

    // Verify initial cart badge displays 0 items
    const cartCount = page.getByTestId("cart-count");
    await expect(cartCount).toHaveText("0");
  });

  test("2. Navigates to Product Detail page when clicking 'View Details'", async ({ page }) => {
    // Click View Details on the first product card
    const firstProductBtn = page.locator('[data-testid^="view-details-"]').first();
    await firstProductBtn.click();

    // Assert URL changed to product detail path
    await expect(page).toHaveURL(/\/products\/\d+/);

    // Assert key detail elements are rendered
    await expect(page.getByTestId("product-title")).toBeVisible();
    await expect(page.getByTestId("product-price")).toBeVisible();
    await expect(page.getByTestId("product-description")).toBeVisible();
    await expect(page.getByTestId("add-to-cart-button")).toBeVisible();
  });

  test("3. Adds product to cart and updates counter in Navbar", async ({ page }) => {
    // Navigate to first product detail page
    await page.locator('[data-testid^="view-details-"]').first().click();

    const cartBadge = page.getByTestId("cart-count");
    await expect(cartBadge).toHaveText("0");

    // Click Add to Cart button
    const addToCartBtn = page.getByTestId("add-to-cart-button");
    await addToCartBtn.click();

    // Verify count increments to 1
    await expect(cartBadge).toHaveText("1");

    // Click Add to Cart a second time
    await addToCartBtn.click();
    await expect(cartBadge).toHaveText("2");
  });

  test("4. Persists cart count across navigation and page reloads", async ({ page }) => {
    // Add product to cart
    await page.locator('[data-testid^="view-details-"]').first().click();
    await page.getByTestId("add-to-cart-button").click();
    await expect(page.getByTestId("cart-count")).toHaveText("1");

    // Navigate back home via navigation link
    await page.getByTestId("nav-home-link").click();
    await expect(page).toHaveURL("/");
    await expect(page.getByTestId("cart-count")).toHaveText("1");

    // Perform hard browser reload
    await page.reload();

    // Verify cart count is preserved from localStorage
    await expect(page.getByTestId("cart-count")).toHaveText("1");
  });
});