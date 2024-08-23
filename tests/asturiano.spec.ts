import { test, expect } from '@playwright/test';
test('Prueba de Url', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv/');

})
test('Prueba de enlaces', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv/');
    await page.getByRole('link', { name: 'Políticas de privacidad' }).click();
    await page.getByRole('link', { name: 'Políticas de cookies' }).click();
    await page.getByRole('link', { name: 'Términos y condiciones' }).click();
})
test('Verificar enlaces dentro del header "Alternar navegación Menú"', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/web_asturiano_sv');

    const headerLocator = page.getByText('Alternar navegación Menú');

    const gustoATiempoLocator = headerLocator.getByText('Gusto a tiempo');
    await expect(gustoATiempoLocator).toBeVisible();


    const clubCheleroLocator = headerLocator.getByText('Club chelero');
    await expect(clubCheleroLocator).toBeVisible();
});
test('Prueba de contacto', async ({ page }) => {
    await page.goto ('https://integration-5ojmyuq-pv6dikuenh6e6.us-5.magentosite.cloud/contacto');
    await page.getByRole('textbox', { name: 'Nombre* Nombre* Nombre*' }).fill('Nicolas');
    await page.getByLabel('Apellido').fill('Dondo');
    await page.getByRole('textbox', { name: 'Email* Email* Email* Email*' }).fill('nicolas.dondo@balloon-group.com');
    await page.getByLabel('Teléfono (opcional)').fill('El numero de telefono es opcional')
    await page.getByLabel('Mensaje').fill('Buenos dias, mi nombre es Nicolas, este es un mensaje de pruena para ver como se puede aplicar Playwright a la automatizacion de algunos sectores de la pagin de Asturiano');
})





