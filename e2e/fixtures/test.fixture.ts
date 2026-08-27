import { test as base } from "@playwright/test";
import { CatalogPage } from "../pages/catalog.page";
import { ProductDetailPage } from "../pages/product-detail.page";
import { StorageUtil } from "../utils/storage.util";

type FrameworkFixtures = {
  catalogPage: CatalogPage;
  productDetailPage: ProductDetailPage;
  cleanStatePage: void;
};

export const test = base.extend<FrameworkFixtures>({
  // Automatic setup fixture: clears storage prior to each spec run
  cleanStatePage: [async ({ page }, use) => {
    await page.goto("/");
    await StorageUtil.clearLocalStorage(page);
    await page.reload();
    await use();
  }, { auto: true }],

  catalogPage: async ({ page }, use) => {
    await use(new CatalogPage(page));
  },

  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },
});

export { expect } from "@playwright/test";