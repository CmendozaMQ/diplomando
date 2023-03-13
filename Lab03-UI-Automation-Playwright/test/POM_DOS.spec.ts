import { expect, test } from '@playwright/test';
import { FJ } from './funciones_curso';

test('Demo POM', async({page})=>{
    const f = new FJ(page);
    // await f.open();
    await f.openURL('https://devexpress.github.io/testcafe/example/');
    await f.scroll(0,500);
    await f.tiempo(1000)
});