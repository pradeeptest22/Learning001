import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.locator('[data-test="email"]').fill('testplaywright_202602@mailinator.com');
  await page.locator('[data-test="password"]').fill('Testing@1708');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-invoices"]')).toContainText('Invoices');
  await expect(page.locator('[data-test="nav-messages"]')).toContainText('Messages');
  await page.locator('[data-test="language-select"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="nav-home"]').click();
});