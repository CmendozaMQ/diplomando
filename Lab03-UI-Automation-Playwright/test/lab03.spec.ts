import { expect, test } from '@playwright/test';
import { lab03 } from './lab03_functions';

test('Test Devexpress Lab3', async({page})=>{
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
    await f.SelectOptionDropdown("//select[@id='preferred-interface']","Command Line");
    await f.SelectOptionDropdown("//select[@id='preferred-interface']","JavaScript API");
    await f.SelectOptionDropdown("//select[@id='preferred-interface']","Both");
    await f.ClickCheckBox("//input[@id='tried-test-cafe']");
    await f.mouseClick(656,311);
    await f.mouseClick(656,402);
    await f.mouseClick(656,492);
    await f.mouseClick(656,582);
    await f.mouseClick(656,672);
    await f.mouseClick(656,762);
    await f.mouseClick(656,852);
    await f.mouseClick(656,942);
    await f.mouseClick(656,1022);
    await f.TypeYourName("//textarea[@id='comments']","Please let us know what you think");
    await f.ClickButton("//button[@id='submit-button']");
    await f.verifyText("//h1[@id='article-header']","Thank you, Cesar!")
    // await f.SelectOptionDropdown("//select[@id='preferred-interface']","JavaScript API");
    await f.tiempo(1000);    
});