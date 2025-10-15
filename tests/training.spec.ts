import { test, expect } from '@playwright/test';
import { PlaygroundPage } from '../pages/playground-page';
import { JQueryUIPage } from '../pages/jquery-ui-page';

// ПЕРВЫЙ ТЕСТ С POM
test('click button with POM', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'This test is flaky in WebKit');
  
  const playground = new PlaygroundPage(page);
  await playground.openClickPage();
  await playground.clickBadButton();
  await playground.expectButtonHasSuccessClass();
});

 // ТЕСТ С POM
  test('checkbox and radio with POM', async({page}) => {
  const jqueryUI = new JQueryUIPage(page);
  await jqueryUI.openCheckboxRadioPage();
  await jqueryUI.clickRadioButton1();
  await jqueryUI.clickCheckbox4();
  await jqueryUI.clickCheckboxNested3();
  await jqueryUI.clickCheckboxNested4();
  // <<<<<   
  await jqueryUI.expectRadioButton1Checked();
  await jqueryUI.expectCheckbox4Checked();
  await jqueryUI.expectCheckboxNested3Checked();
  await jqueryUI.expectCheckboxNested4Checked();
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
