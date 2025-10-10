import { test, expect } from '@playwright/test';

test('Проверка заголовка', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await expect(page).toHaveTitle(/Grafana/);
});

test('Нажатие на кнопку Forgot your password', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  // Click the Forgot your password link.
  await page.getByRole('link', { name: 'Forgot your password?' }).click();
  // Expects page to have a button with the name of Send reset email.
  await expect(page.getByRole('button', { name: 'Send reset email' })).toBeVisible();
});

test('Вход с невалидным логином и паролем', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.locator('[data-testid="data-testid Username input field"]').fill('Логин');
  await page.locator('[data-testid="data-testid Password input field"]').fill('Пароль');
  await page.locator('svg[width="16"][height="16"].css-fmaj2t-Icon').click();
  // Проверка введенного пароля
  await page.locator('[data-testid="data-testid Login button"]').click();
  // Проверка наличия сообщения о невалидном логине или пароле
  await expect(page.getByText('Invalid username or password')).toBeVisible();
});






test.skip('Мой первый тест1', async () => {
  console.log('Hello, World!')
});

test.skip('Мой первый тест2', () => {
  console.log('Hello, World!');
});

