// playwright-dev-page.ts
import { expect, test, Page } from '@playwright/test';

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=300;

export class FJ {

  readonly page: Page;
//   readonly getStartedLink: Locator;
//   readonly gettingStartedHeader: Locator;
//   readonly pomLink: Locator;
//   readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    // this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    // this.pomLink = page.locator('li', { hasText: 'Guides' }).locator('a', { hasText: 'Page Object Model' });
    // this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async open(){
    await this.page.goto('https://devexpress.github.io/testcafe/example/');
  }

  async openURL(url: string, tiempo=tie){
    await this.page.goto(url);
    await sleep(tiempo);
  }

  async tiempo(t: number){
    await sleep(t);
  }

  async scroll(x: number,y: number,tiempo=tie){
    await this.page.mouse.wheel(x,y);
    await sleep(tiempo);
  }

  async texto(selector: string,val: string,tiempo=tie){
    await this.page.locator(selector).fill(val);
    await sleep(tiempo);
  }

  async click(selector: string, tiempo=tie){
    await this.page.locator(selector).click()
    await sleep(tiempo)
  }

  async valor_campo(selector: string, tiempo=tie){
    const value = await this.page.locator(selector).inputValue();
    await sleep(tiempo);
    return value
  }

  // async texto_try(selector: string, val: string, tiempo=tie){
  //   try{
  //     const locator = this.page.locator(selector);
  //     await expect(locator).toBeVisible();
  //     await expect(locator).toBeEnabled();
  //     await this.page.locator(selector).fill(val)
  //     await sleep(tiempo)
  //   }
  // }
}