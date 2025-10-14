// pages/base-page.ts
export class BasePage {
  constructor(public page: any) {}

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }
}