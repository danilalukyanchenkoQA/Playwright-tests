// pages/checkboxes-ui-page.ts
import { Page, expect } from '@playwright/test';

export class CheckboxesPage {
  constructor(public page: Page) {}

    // Навигация
  async OpenCheckboxPage(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  }