import { Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async addBikeLightToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  async goToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async validateProductVisible(productName: string) {
    await expect(this.page.getByText(productName)).toBeVisible();
  }
}
