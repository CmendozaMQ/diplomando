import { expect, test } from '@playwright/test';
import { enc } from './enc_functions';

test.only('test features to search', async({page})=>{
    const f = new enc(page);
    await f.openURLEncuentralos(); 
    await f.ClickButton("//button[@name='Genero']");
    // await f.ClickButton("//button[normalize-space()='Femenino']");
    await f.ClickFilterOption("Femenino");
    await f.ClickButton("//button[@name='Contextura']");
    // await f.ClickButton("//button[normalize-space()='Delgada']");    
    // await f.ClickButton("//button[@name='Estatura']");
    // await f.ClickButton("//button[@name='Forma de la cara']");
    // await f.ClickButton("//button[@name='Color de cabello']");
    // await f.ClickButton("//button[@name='Color de ojos']");
    // await f.ClickButton("//button[@name='Forma de la Nariz']");
    // await f.ClickButton("//button[@name='Forma de los Labios']");
    // await f.ClickButton("//button[@name='Color de los Dientes']");
    // await f.ClickButton("//button[@name='Forma de los Dientes']");
    // await f.tiempo(3000);    
});
test('Encuentralos', async({page})=>{
    const f = new enc(page);
    
    // await f.TypeYourName("//input[@id='developer-name']","Cesar");
    // await f.ClickCheckBox("//input[@id='remote-testing']");
    // await f.ClickCheckBox("//input[@id='reusing-js-code']");
    // await f.ClickCheckBox("//input[@id='background-parallel-testing']");
    // await f.ClickCheckBox("//input[@id='continuous-integration-embedding']");
    // await f.ClickCheckBox("//input[@id='traffic-markup-analysis']");
    // await f.ClickRadiobutton("//input[@id='windows']");
    // await f.ClickRadiobutton("//input[@id='macos']");
    // await f.ClickRadiobutton("//input[@id='linux']");
    // await f.ClickDropDown("//select[@id='preferred-interface']");
    // await f.SelectOptionDropdown("//select[@id='preferred-interface']","Command Line");
    // await f.SelectOptionDropdown("//select[@id='preferred-interface']","JavaScript API");
    // await f.SelectOptionDropdown("//select[@id='preferred-interface']","Both");
    // await f.ClickCheckBox("//input[@id='tried-test-cafe']");
    // await f.mouseClick(656,311);
    // await f.mouseClick(656,402);
    // await f.mouseClick(656,492);
    // await f.mouseClick(656,582);
    // await f.mouseClick(656,672);
    // await f.mouseClick(656,762);
    // await f.mouseClick(656,852);
    // await f.mouseClick(656,942);
    // await f.mouseClick(656,1022);
    // await f.TypeYourName("//textarea[@id='comments']","Please let us know what you think");
    // await f.ClickButton("//button[@id='submit-button']");
    // await f.verifyText("//h1[@id='article-header']","Thank you, Cesar!")
    // await f.SelectOptionDropdown("//select[@id='preferred-interface']","JavaScript API");
    await f.tiempo(3000);    
});