import { Page, expect } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateCompleteOrder() {
    await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!');
    await expect(this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    await expect(this.page.locator('[data-test="back-to-products"]')).toBeVisible();
  }
}
