// playwright-dev-page.ts
import { expect, test, Page } from '@playwright/test';

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

export class lab03 {

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

  async tiempo(t: number){
    await sleep(t);
  }

  async open(){
    await this.page.goto('https://devexpress.github.io/testcafe/example/');
  }

  async openURL(url: string, time=tie){
    await this.page.goto(url);
    await sleep(time);
  }

  async scroll(x: number,y: number,tiempo=tie){
    await this.page.mouse.wheel(x,y);
    await sleep(tiempo);
  }

  async TypeYourName(selector: string,val: string, time=tie){
    // await this.page.locator(selector).fill(val);
    await this.page.locator(selector).type(val);
    await sleep(time);
  }

  async FillYourName(selector: string,val: string, time=tie){
    // await this.page.locator(selector).fill(val);
    await this.page.locator(selector).fill(val);
    await sleep(time);
  }

  async ClickCheckBox(selector: string, time=tie){
    await this.page.locator(selector).click();
    await sleep(time);
  }

  async ClickDropDown(selector: string, time=tie){
    await this.page.locator(selector).click();
    await sleep(time);
  }

  async ClickRadiobutton(selector: string, time=tie){
    await this.page.locator(selector).click();
    await sleep(time);
  }

  async ClickButton(selector: string, time=tie){
    await this.page.locator(selector).click();
    await sleep(time);
  }

  async SelectOptionDropdown(selector: string, name: string, time=tie){
    await this.page.locator(selector).selectOption(name);
    await sleep(time);
  }

  async verifyText(selector: string, val: string, time=tie){
    const  locator = this.page.locator(selector);
    await expect(locator).toContainText(val);
    await sleep(time);
  }

  async mouseClick(y: number,x: number, time=tie){
    await this.page.mouse.click(x, y);
    await sleep(time);
  }
}