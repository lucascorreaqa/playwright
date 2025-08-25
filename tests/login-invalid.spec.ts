import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('Login inválido no SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', '123456');

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface: Username and password do not match any user in this service');
});
