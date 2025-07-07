const {test,expect} =require('@playwright/test')

test("Valid Login", async function({page}) {

   console.log(await page.viewportSize().width)
   console.log(await page.viewportSize().height)
   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
   await page.locator("a[title='My Account']").click()
   await page.locator("#input-email").fill("vikashkeshri1188@gmail.com")
   await page.locator("//input[@id='input-password']").fill("Pappuyadav@123")
   await page.locator("//input[@value='Login']").click()
   console.log(page.title())
   await page.locator("//a[@class='list-group-item'][normalize-space()='Logout']").click()
   //await page.screenshot({ path: 'screenshot.png' })

    //expect(100).toBe(101)
    // to run the playwright report first install -> npm install -D allure-playwright
// npx playwright test --reporter=allure-playwright  
// to create allure-report in cmd line we have exceute few commands
// /npm install -g allure-commandline --save-dev
//for every execution need to run
//allure generate allure-results -o allure-report --clean
//allure open allure-report
}) 