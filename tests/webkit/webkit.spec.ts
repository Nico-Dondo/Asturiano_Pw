import { test, expect } from '@playwright/test';

test('Verificar el carrito en Webkit', async ({ page }) => {
   
});
test('Prueba de enlaces en Chrome', async ({ page }) => {
    await page.goto('https://mcstaging.tiendaselasturiano.com/');
    await page.getByRole('link', { name: 'Políticas de privacidad' }).click();
    await page.getByRole('link', { name: 'Políticas de cookies' }).click();
    await page.getByRole('link', { name: 'Términos y condiciones' }).click();
});
 
