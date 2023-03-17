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

  async validar_texto(selector: string,val: string, tiempo=tie){
    const locator = this.page.locator(selector);
    await expect(locator).toContainText(val);
    await sleep(tiempo)
  }

  async texto_val(selector: string, val: string, tiempo=tie){
    const locator = this.page.locator(selector);
    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();
    await expect(locator).toBeEmpty();
    await this.page.locator(selector).fill(val);
    await sleep(tiempo);
  }

  async valor_campo(selector: string, tiempo=tie){
    const value = await this.page.locator(selector).inputValue();
    await sleep(tiempo);
    return value
  }

  async texto_try(selector: string, val: string, tiempo=tie){
    try{
      const locator = this.page.locator(selector);
      await expect(locator).toBeVisible();
      await expect(locator).toBeEnabled();
      await this.page.locator(selector).fill(val)
      await sleep(tiempo)
    }catch(error){
      console.log("campo con algun error");
    }
  }

  async validar_url(url: string, tiempo=tie){
    await expect(this.page).toHaveURL(url);
  }

  async validar_titulo(titulo: string, tiempo=tie){
    await expect(this.page).toHaveTitle(titulo);
    await sleep(tiempo);
  }

  async validar_url_lig(url: string, tiempo=tie){
    await expect.soft(this.page).toHaveURL(url);
    await sleep(tiempo);
  }

  async combo_value(selector: string, val: string, tiempo=tie){
    const cam = this.page.locator(selector);
    await cam.selectOption(val);
    await sleep(tiempo);
  }

  async combo_Label(selector: string, val:  string, tiempo=tie){
    const cam = this.page.locator(selector);
    await cam.selectOption({label: val});
    await sleep(tiempo);
  }

  async combo_multiples(selector: string, arg: string[] , tiempo=tie){
    const cam = this.page.locator(selector);
    console.log(arg);
    await cam.selectOption(arg);
    await sleep(tiempo);
  }

  async terminar(tiempo=tie){
    await this.page.close();
    await sleep(tiempo);
  }

  
}