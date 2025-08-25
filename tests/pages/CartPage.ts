import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateProductInCart(productName: string) {
    await expect(this.page.getByText(productName)).toBeVisible();
  }

  async goToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
