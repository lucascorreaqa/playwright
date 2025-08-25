import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CheckoutCompletePage } from './pages/CheckoutCompletePage';

test('Finalizar compra e validar Checkout Complete', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addBackpackToCart();
  await productsPage.goToCart();

  await cartPage.goToCheckout();
  await checkoutPage.fillInformation('Lucas', 'Anjos', '99999999');
  await checkoutPage.validateOverview('Sauce Labs Backpack');
  await checkoutPage.finishOrder();

  await checkoutCompletePage.validateCompleteOrder();
});
