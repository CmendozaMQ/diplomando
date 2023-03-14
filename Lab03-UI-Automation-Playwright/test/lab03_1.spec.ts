import { expect, test } from '@playwright/test';
import { lab03 } from './lab03_functions';

test('Demo POM', async({page})=>{
    const f = new lab03(page);
    await f.openURL('https://devexpress.github.io/testcafe/example/');
    await f.TypeYourName("//input[@id='developer-name']","Cesar");
    await f.ClickCheckBox("//input[@id='remote-testing']");
    await f.ClickCheckBox("//input[@id='reusing-js-code']");
    await f.ClickCheckBox("//input[@id='background-parallel-testing']");
    await f.ClickCheckBox("//input[@id='continuous-integration-embedding']");
    await f.ClickCheckBox("//input[@id='traffic-markup-analysis']");
    await f.ClickRadiobutton("//input[@id='windows']");
    await f.ClickRadiobutton("//input[@id='macos']");
    await f.ClickRadiobutton("//input[@id='linux']");
    await f.ClickDropDown("//select[@id='preferred-interface']");
    await f.ClickDropDown("//option[normalize-space()='Command Line']");
    await f.ClickDropDown("//option[normalize-space()='JavaScript API']");
    await f.ClickDropDown("//option[normalize-space()='Both']");
    // await f.SelectOptionDropdown("//select[@id='preferred-interface']","JavaScript API");
    await f.tiempo(1000);
});