import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('Login válido no SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});
