import { test, expect } from "../fixtures/test.fixture";
import { Logger } from "../utils/logger.util";

test.describe("Product Catalog Tests", () => {
  test("Should display product catalog grid correctly", async ({ catalogPage }) => {
    Logger.step("Navigate to catalog home");
    await catalogPage.goto();

    Logger.step("Verify catalog UI elements");
    await catalogPage.verifyPageLoaded();
    await catalogPage.verifyCartCount(0);
  });
});