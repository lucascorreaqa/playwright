import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

test('Validar tela de Checkout: Overview', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addBackpackToCart();
  await productsPage.goToCart();

  await cartPage.goToCheckout();
  await checkoutPage.fillInformation('Lucas', 'Anjos', '99999999');
  await checkoutPage.validateOverview('Sauce Labs Backpack');
});
