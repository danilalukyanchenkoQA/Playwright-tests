import { test, expect } from '@playwright/test';


test('click test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/click');
    await page.locator("#badButton").click();
    // <<<<<
    await expect(await page.locator("#badButton").getAttribute("class")).toMatch(/btn-success/);
  });

  test('checkbox and radio', async({page}) => {
  await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');
  await page.locator("[for=radio-1]").click();
  await page.locator("[for=checkbox-4]").click();
  await page.locator("[for=checkbox-nested-3]").click();
  await page.locator("[for=checkbox-nested-4]").click();
  // <<<<<   
  await expect(page.locator("[for=radio-1]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-4]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-nested-3]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-nested-4]")).toHaveClass(/ui-checkboxradio-checked/);
});

test('Success Login', async({page}) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.locator('input[placeholder="User Name"]').fill('your_username');
  await page.locator('input[placeholder="********"]').fill('pwd');
  await page.locator('button:has-text("Log In")').click();
  await expect(page.locator('#loginstatus')).toHaveText('Welcome, your_username!');
  });

  test('Bad Login', async({page}) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.locator('input[placeholder="User Name"]').fill('your_username');
  await page.locator('input[placeholder="********"]').fill('invalid password');
  await page.locator('button:has-text("Log In")').click();
  await expect(page.locator('#loginstatus')).toHaveText('Invalid username/password');
  });

  test('Log out', async({page}) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.locator('input[placeholder="User Name"]').fill('your_username');
  await page.locator('input[placeholder="********"]').fill('pwd');
  await page.locator('button:has-text("Log In")').click();
  await expect(page.locator('#loginstatus')).toHaveText('Welcome, your_username!');
  await page.locator('button:has-text("Log Out")').click();
  await expect(page.locator('#loginstatus')).toHaveText('User logged out.');
  });