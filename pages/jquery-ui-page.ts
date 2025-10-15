// pages/jquery-ui-page.ts
import { Page, expect } from '@playwright/test';

export class JQueryUIPage {
  constructor(public page: Page) {}

  // Навигация
  async openCheckboxRadioPage(): Promise<void> {
    await this.page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');
  }

  // Методы для радиокнопок
  async clickRadioButton1(): Promise<void> {
    await this.page.locator("[for=radio-1]").click();
  }

  async expectRadioButton1Checked(): Promise<void> {
    await expect(this.page.locator("[for=radio-1]")).toHaveClass(/ui-checkboxradio-checked/);
  }

  // Методы для чекбоксов
  async clickCheckbox4(): Promise<void> {
    await this.page.locator("[for=checkbox-4]").click();
  }

  async expectCheckbox4Checked(): Promise<void> {
    await expect(this.page.locator("[for=checkbox-4]")).toHaveClass(/ui-checkboxradio-checked/);
  }

  async clickCheckboxNested3(): Promise<void> {
    await this.page.locator("[for=checkbox-nested-3]").click();
  }

  async expectCheckboxNested3Checked(): Promise<void> {
    await expect(this.page.locator("[for=checkbox-nested-3]")).toHaveClass(/ui-checkboxradio-checked/);
  }

  async clickCheckboxNested4(): Promise<void> {
    await this.page.locator("[for=checkbox-nested-4]").click();
  }

  async expectCheckboxNested4Checked(): Promise<void> {
    await expect(this.page.locator("[for=checkbox-nested-4]")).toHaveClass(/ui-checkboxradio-checked/);
  }
}