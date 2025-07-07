 import { test, expect } from '@playwright/test';



 //test.use({ browserName: 'webkit'});
 test('Validation of dialogbox Error login', async ({page})=>
 {
   
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://www.google.com/")
    //await page.goBack()
    //await page.goForward()
    await page.pause();

   await page.on('dialog', async  dialog => dialog.accept());

    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();

     });