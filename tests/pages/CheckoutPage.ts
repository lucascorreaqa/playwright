import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillInformation(firstName: string, lastName: string, zip: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
    await this.page.locator('[data-test="continue"]').click();
  }

  async validateOverview(productName: string) {
    await expect(this.page.getByText('Checkout: Overview')).toBeVisible();
    await expect(this.page.getByText(productName)).toBeVisible();
    await expect(this.page.locator('[data-test="finish"]')).toBeVisible();
  }

  async finishOrder() {
    await this.page.locator('[data-test="finish"]').click();
  }
}
