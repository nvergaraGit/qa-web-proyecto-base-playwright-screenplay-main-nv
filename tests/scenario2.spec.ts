import { test, expect } from '@playwright/test';

test('Escenario 2: Agregar productos de Phones & PDAs al carrito', async ({ page }) => {
  // Paso 1: Navegar a la página principal
  await page.goto('/');

  // Paso 2: Ir a "Phones & PDAs"
  await page.click('a:has-text("Phones & PDAs")');

  // Paso 3: Añadir un producto de cada tipo al carrito
  const products = await page.locator('.product-thumb');
  const productCount = await products.count();

  for (let i = 0; i < productCount; i++) {
    const product = products.nth(i);
    await product.locator('button:has-text("Add to Cart")').click();
  }

  // Paso 4: Verificar productos en el carrito
  await page.click('button[title="Shopping Cart"]');
  const cartItems = await page.locator('.table.table-bordered .text-left').count();
  expect(cartItems).toBe(productCount);

  // Verificar precios y total
  let totalPrice = 0;
  const prices = await page.locator('.table.table-bordered .text-right').allTextContents();
  prices.forEach((price) => {
    totalPrice += parseFloat(price.replace('$', ''));
  });

  const total = parseFloat(await page.locator('h3').textContent().replace('Total: $', ''));
  expect(total).toBeCloseTo(totalPrice, 2);
});
