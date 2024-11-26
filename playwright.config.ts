import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 180000, // Tiempo máximo de prueba: 3 minutos
  retries: 0, // Sin reintentos
  reporter: [['junit', { outputFile: 'results.xml' }]], // Generar reporte JUnit
  use: {
    video: 'on', // Grabar video de las pruebas
    baseURL: 'https://opencart.abstracta.us/', // URL base
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
  fullyParallel: true, // Ejecutar pruebas en paralelo
});
