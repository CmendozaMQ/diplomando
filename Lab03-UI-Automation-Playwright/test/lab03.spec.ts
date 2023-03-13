import { test, expect } from '@playwright/test';

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

test('Lab03', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').type('cesar');
  await sleep(4000)
  await page.getByTestId('remote-testing-checkbox').check();
  await page.getByTestId('reusing-js-code-checkbox').check();
  await page.getByTestId('parallel-testing-checkbox').check();
  await page.getByTestId('ci-checkbox').check();
  await page.getByTestId('analysis-checkbox').check();
  await page.getByTestId('windows-radio').check();
  await page.getByTestId('macos-radio').check();
  await page.getByTestId('linux-radio').check();
  await page.getByTestId('preferred-interface-select').selectOption('JavaScript API');
  await page.getByTestId('preferred-interface-select').selectOption('Both');
  await page.getByTestId('preferred-interface-select').selectOption('Command Line');
  await page.getByTestId('tried-testcafe-checkbox').check();
  await page.getByTestId('comments-area').click();
  await page.getByTestId('comments-area').fill('Please let us know what you think');
  await page.getByTestId('populate-button').click();
  await page.getByTestId('submit-button').click();
});