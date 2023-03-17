import { expect, test } from '@playwright/test';
import { FJ } from './funciones_curso';


test('test', async({page})=>{
    const f = new FJ(page);
    await f.openURL('https://testingqarvn.com.es/combobox/',3000);
    await f.texto_val("//input[@id='wsf-1-field-45']","Rodrigo");
    await f.texto_val("//input[@id='wsf-1-field-46']","villanueva");
    await f.scroll(0,700);
    await f.tiempo(1000);
    await f.texto_val("//input[@id='wsf-1-field-47']","r@r.com");
    await f.texto_val("//input[@id='wsf-1-field-48']","656565");
    await f.texto_val("//textarea[@id='wsf-1-field-49']","Direccion uno");
    await f.click("//label[@id='wsf-1-label-50-row-1']");
    await f.click("//label[@id='wsf-1-label-51-row-1']");
    await f.combo_value("//select[@id='wsf-1-field-53']","Linux");
    await f.combo_value("//select[@id='wsf-1-field-53']","Windows");
    await f.combo_Label("//select[@id='wsf-1-field-53']","Mac");
});

test('combobox Multiples', async({page})=>{
    const f = new FJ(page);
    await f.openURL('https://demoqa.com/select-menu',3000);
    await f.click("(//div[contains(text(),'Select...')])[1]")
    await page.locator('#react-select-4-option-0').click();
    await f.tiempo(1000);
    await page.locator('#react-select-4-option-1').click();
    await f.tiempo(1000);
    await page.locator('#react-select-4-option-2').click();
    await f.tiempo(1000);
    await page.locator('#react-select-4-option-3').click();
    await f.tiempo(1000);
});

test.only('Combobox multiples dos',async({page})=>{
    page.setDefaultTimeout(8000);
    const f = new FJ(page);
    await f.openURL('https://demoqa.com/select-menu',3000);
    await f.click("//option[@value='saab'][contains(.,'Saab')]");
    await f.combo_multiples("#cars",['volvo','audi','saab','opel']);
});