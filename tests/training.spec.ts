import { test, expect } from '@playwright/test';


  test('click test', async ({ page, browserName }) => {
  // Пропускаем тест только в WebKit
  test.skip(browserName === 'webkit', 'This test is flaky in WebKit');
  await page.goto('http://uitestingplayground.com/click');
  await page.locator("#badButton").click();
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

  test('text input and button test', async ({ page }) => {
  // Переходим на страницу
  await page.goto('http://uitestingplayground.com/textinput');
  // Локаторы для элементов
  const textInput = page.locator('#newButtonName');
  const button = page.locator('#updatingButton');
  // Вводим начальный текст
  await textInput.fill('Abc');
  // Выделяем весь текст в поле ввода
  await textInput.selectText();
  // Вырезаем выделенный текст (Ctrl+X)
  await textInput.press('Control+X');
  // Три раза вставляем скопированный текст (Ctrl+V)
  await textInput.press('Control+V');
  await textInput.press('Control+V'); 
  await textInput.press('Control+V');
  // Кликаем по кнопке
  await button.click();
  // Проверяем что текст кнопки равен "AbcAbcAbc"
  await expect(button).toHaveText('AbcAbcAbc');
});

  test('get image caption', async({page}) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');
  // Наводим курсор на вторую картинку (индекс 1)
  await page.locator(".figure").nth(1).hover();
  // Проверяем, что под картинкой отобразился текст
  // Текст находится в элементе с классом .figcaption внутри .figure
  const caption = page.locator(".figure").nth(1).locator(".figcaption");
  await expect(caption).toBeVisible();
  // Дополнительная проверка - что текст содержит имя пользователя
  await expect(caption).toContainText('user2');
});

  test('checkboxes', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/checkboxes');
  const form = page.locator("#checkboxes input")
  const cb1 = form.nth(0);
  const cb2 = form.nth(1);
  // >>>>> Устанавливаю галочку на чекбоксе cb1 и снимаю с чекбокса cb2
  await cb1.check();
  await cb2.uncheck();
// <<<<< Проверяю установлена ли на них или снята галочка
  await expect(cb1).toBeChecked()
  await expect(cb2).not.toBeChecked()
});
