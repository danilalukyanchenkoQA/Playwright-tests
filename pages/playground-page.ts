// pages/playground-page.ts
import { Page, expect } from '@playwright/test';

export class PlaygroundPage {
  constructor(public page: Page) {}

  // Метод для открытия страницы click
  async openClickPage(): Promise<void> {
    await this.page.goto('http://uitestingplayground.com/click');
  }

  // Метод для клика на кнопку
  async clickBadButton(): Promise<void> {
    await this.page.locator("#badButton").click();
  }

  // Метод для проверки класса кнопки
  async expectButtonHasSuccessClass(): Promise<void> {
    await expect(this.page.locator("#badButton")).toHaveClass(/btn-success/);
  }
}