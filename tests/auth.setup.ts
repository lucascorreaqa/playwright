import { chromium } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Login no SauceDemo
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Espera até estar logado
  await page.waitForURL('**/inventory.html');

  // Salva o estado autenticado
  await page.context().storageState({ path: authFile });

  await browser.close();
}

export default globalSetup;
