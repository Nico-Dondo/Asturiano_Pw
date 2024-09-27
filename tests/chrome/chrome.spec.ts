import { test, expect } from '@playwright/test';

test('Prueba de Url en Chrome', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv/');
});

test('Prueba de enlaces en Chrome', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv/');
    await page.getByRole('link', { name: 'Políticas de privacidad' }).click();
    await page.getByRole('link', { name: 'Políticas de cookies' }).click();
    await page.getByRole('link', { name: 'Términos y condiciones' }).click();
});

test('Verificar enlaces dentro del header "Alternar navegación Menú" en Chrome', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv');

    const headerLocator = page.getByText('Alternar navegación Menú');

    const gustoATiempoLocator = headerLocator.getByText('Gusto a tiempo');
    await expect(gustoATiempoLocator).toBeVisible();

    const clubCheleroLocator = headerLocator.getByText('Club chelero');
    await expect(clubCheleroLocator).toBeVisible();
});


