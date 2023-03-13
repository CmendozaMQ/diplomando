import { expect, test } from '@playwright/test';
import { FJ } from './funciones_curso';

test('Demo POM', async({page})=>{
    const f = new FJ(page);
    // await f.open();
    // await f.openURL('https://devexpress.github.io/testcafe/example/');
    await f.openURL('https://testingqarvn.com.es/prueba-de-campos-checkbox/');
    await f.scroll(0,500);
    await f.texto("//input[@id='wsf-1-field-29']","Cesar")
    await f.texto("//input[@id='wsf-1-field-30']","Mendoza")
    await f.texto("//input[@id='wsf-1-field-31']","field 31")
    await f.texto("//input[@id='wsf-1-field-32']","field 32")
    await f.texto("//textarea[@id='wsf-1-field-33']","field 33")
    await f.click("//label[@id='wsf-1-label-36-row-1']")
    await f.click("//label[@id='wsf-1-label-36-row-3']")
    await f.click("//label[@id='wsf-1-label-36-row-1']")
    await f.click("//button[@id='wsf-1-field-34']")    
    await f.tiempo(1000)
});