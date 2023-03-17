import { expect, test } from '@playwright/test';
import { FJ } from './funciones_curso';

var myArray = ['rodrigo.com','rodrigo@gmail.com','rod.mx','krt.com'];
var rand = myArray[(Math.random() * myArray.length) | 0];
console.log(rand);

test('Demo POM', async({page})=>{
    const f = new FJ(page);
    await f.openURL('https://testingqarvn.com.es/prueba-de-campos-checkbox/',3000);
    await f.validar_titulo("Prueba de campos Checkbox | TestingQaRvn");
    await f.scroll(0,500);
    // await f.texto_try("//input[@id='wsf-1-field-28']","Rodrigo");
    await f.texto_val("//input[@id='wsf-1-field-29']","Ericka");
    const valor = await f.valor_campo("//input[@id='wsf-1-field-29']")
    console.log(valor)
    if(valor == "rodrigo")
    {
        await f.texto_try("//input[@id='wsf-1-field-30']","Villanueva");
    }else if(valor == "Ericka"){
        await f.texto_try("//input[@id='wsf-1-field-30']","Paz");
    }else if(valor == "Juan"){
        await f.texto_try("//input[@id='wsf-1-field-30']","Perez");
    }else{
        await f.texto_try("//input[@id='wsf-1-field-30']","Chavez");
    }
    // await f.texto("//input[@id='wsf-1-field-30']","Mendoza");
    await f.texto_try("//input[@id='wsf-1-field-31']",rand);
    await f.texto("//input[@id='wsf-1-field-32']","343434");
    await f.texto("//textarea[@id='wsf-1-field-33']","Dir uno");
    await f.click("//label[@id='wsf-1-label-36-row-1']");
    await f.click("//label[@id='wsf-1-label-36-row-3']");
    await f.click("//label[@id='wsf-1-label-36-row-1']");
    await f.click("//button[@id='wsf-1-field-34']");
    await f.validar_texto("//p[normalize-space()='Gracias por tu encuesta.']","Gracias");
    await f.tiempo(1000);
});