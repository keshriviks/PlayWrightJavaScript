const { test, expect } = require('@playwright/test');
const {PageManager} = require('../pageobjects/PageManager');





test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const pageManager= new PageManager(page);
   const email = "rahulshetty@gmail.com";
   const password ="Iamking@000";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   const loginPage = pageManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(email, password);

   const dashboardPage = pageManager.getDashboardPage();
   await dashboardPage.searchProductAddToCart(productName);
   await dashboardPage.navigateToCart();
  //await page.locator(".card-body b").first().waitFor();
   

   //await page.pause();

   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();

   await page.locator("[placeholder*='Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }

   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");


   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

});








