const {test,expect} = require('@playwright/test')
const testdata1= JSON.parse(JSON.stringify(require("../testlogin.json")))

test.describe("Data Driven Login Test", function ()
{
   for(const data of testdata1)
      {
       test.describe(`Login with users ${data.id}`, function()
       {
         test('Login To Application ', async({page})=>{
   
   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
   await page.locator("a[title='My Account']").click()
   await page.locator("#input-email").fill(data.username)
   await page.locator("//input[@id='input-password']").fill(data.password)
  // await page.pause()
   
});



       })

      }

      })
