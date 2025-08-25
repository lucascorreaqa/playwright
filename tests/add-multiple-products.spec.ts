import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';

test('Adicionar dois produtos ao carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addBackpackToCart();
  await productsPage.addBikeLightToCart();
  await productsPage.goToCart();

  await cartPage.validateProductInCart('Sauce Labs Backpack');
  await cartPage.validateProductInCart('Sauce Labs Bike Light');
});
