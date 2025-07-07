const {test,expect} = require('@playwright/test')
const testdata= JSON.parse(JSON.stringify(require("../testdata.json")))

test("Login To Application", async ({page}) => {

   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
   await page.locator("a[title='My Account']").click()
   await page.locator("#input-email").fill(testdata.interest[2])
   await page.locator("//input[@id='input-password']").fill(testdata.address.city)
   await page.locator("//input[@id='input-password']").fill(testdata.password)
   //await page.pause()
   await page.locator("//input[@value='Login']").click()
   console.log(page.title())
   await page.locator("//a[@class='list-group-item'][normalize-space()='Logout']").click()
  
}) 
