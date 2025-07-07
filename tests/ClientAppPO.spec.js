const { test, expect } = require('@playwright/test');
const { PageManager } = require('../pageobjects/PageManager');
//Json -> String -> js object
const dataSet = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));




test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const pageManager = new PageManager(page);
   //const email = "rahulshetty@gmail.com";
   //const password = "Iamking@000";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   const loginPage = pageManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(dataSet.username, dataSet.password);

   const dashboardPage = pageManager.getDashboardPage();
   await dashboardPage.searchProductAddToCart(dataSet.productName);
   await dashboardPage.navigateToCart();
   //await page.locator(".card-body b").first().waitFor();


   //await page.pause();
   const cartPage = pageManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(dataSet.productName);
   await cartPage.Checkout();

   const ordersReviewPage = pageManager.getOrdersReviewPage();
   await ordersReviewPage.searchCountryAndSelect("ind", "India");
   const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = pageManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});








