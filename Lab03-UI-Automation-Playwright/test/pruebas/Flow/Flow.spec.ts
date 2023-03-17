import { test, expect } from '@playwright/test';

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

test('Lab03', async ({ page }) => {  
  await page.goto('https://flow4.newvisiondata.com/flow/logon.do');
  await page.locator("//input[@name='userName']").type('zebra');
  await page.locator("//input[@name='password']").type('z3bran0n3');
  await page.locator("//input[@name='submit']").click();
  await sleep(1000);
  const header  = page.frame('header');
  //console.log(frame);
  await header?.locator("//span[normalize-space()='Replenish']").click();
  await header?.locator("//span[normalize-space()='Internal']").click();
  await header?.locator("//span[normalize-space()='Exceptions']").click();
  await header?.locator("//span[normalize-space()='Supplier Portal']").click();
  await header?.locator("//span[normalize-space()='Internal']").click();
  await sleep(1000);
  const main  = page.frame('main');
  await main?.locator("//img[@id='nextRequestButton']").click();
  await sleep(3000);
//   await page.getByTestId('name-input').click();
//   await page.getByTestId('name-input').click();
//   await page.getByTestId('name-input').click();
//   await page.getByTestId('name-input').type('cesar');
//   await sleep(4000)
//   await page.getByTestId('remote-testing-checkbox').check();
//   await page.getByTestId('reusing-js-code-checkbox').check();
//   await page.getByTestId('parallel-testing-checkbox').check();
//   await page.getByTestId('ci-checkbox').check();
//   await page.getByTestId('analysis-checkbox').check();
//   await page.getByTestId('windows-radio').check();
//   await page.getByTestId('macos-radio').check();
//   await page.getByTestId('linux-radio').check();
//   await page.getByTestId('preferred-interface-select').selectOption('JavaScript API');
//   await page.getByTestId('preferred-interface-select').selectOption('Both');
//   await page.getByTestId('preferred-interface-select').selectOption('Command Line');
//   await page.getByTestId('tried-testcafe-checkbox').check();
//   await page.getByTestId('comments-area').click();
//   await page.getByTestId('comments-area').fill('Please let us know what you think');
//   await page.getByTestId('populate-button').click();
//   await page.getByTestId('submit-button').click();
});