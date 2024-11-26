import { test, expect } from '@playwright/test';

test('Escenario 1: Verificar agregar producto Apple Cinema 30', async ({ page }) => {
  // Paso 1: Navegar a la página principal
  await page.goto('/');

  // Paso 2: Ir a "Desktops" > "Show All Desktops"
  await page.hover('a:has-text("Desktops")');
  await page.click('a:has-text("Show All Desktops")');

  // Paso 3: Seleccionar "Apple Cinema 30"
  await page.click('a:has-text("Apple Cinema 30")');

  // Paso 4: Introducir datos necesarios
  await page.click('input[name="option[218]"]'); // Campo "Radio" requerido

  // Paso 5: Hacer clic en "Add to Cart"
  await page.click('button#button-cart');

  // Paso 6: Verificar mensaje de error
  const errorMessage = await page.locator('.text-danger').textContent();
  expect(errorMessage).toContain('required');

  // Paso 7: Imprimir información de "Specification"
  const specification = await page.locator('#tab-specification').textContent();
  console.log('Specifications:', specification);
});
