import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class PlaygroundPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Методы для страницы classattr
  async openClassAttrPage(): Promise<void> {
    await this.goto('http://uitestingplayground.com/classattr');
  }

  async clickBadButton(): Promise<void> {
    await this.page.locator("#badButton").click();
  }

  async expectButtonHasSuccessClass(): Promise<void> {
    await expect(this.page.locator("#badButton")).toHaveClass(/btn-success/);
  }

  // Методы для страницы textinput
  async openTextInputPage(): Promise<void> {
    await this.goto('http://uitestingplayground.com/textinput');
  }

  async fillButtonName(text: string): Promise<void> {
    await this.page.locator('#newButtonName').fill(text);
  }

  async clickUpdatingButton(): Promise<void> {
    await this.page.locator('#updatingButton').click();
  }

  async expectButtonText(text: string): Promise<void> {
    await expect(this.page.locator('#updatingButton')).toHaveText(text);
  }

  // Метод для клика с копированием текста
  async fillButtonNameMultipleTimes(text: string, times: number = 3): Promise<void> {
    await this.page.locator('#newButtonName').fill(text);
    await this.page.locator('#newButtonName').selectText();
    await this.page.locator('#newButtonName').press('Control+X');
    
    for (let i = 0; i < times; i++) {
      await this.page.locator('#newButtonName').press('Control+V');
    }
  }
}