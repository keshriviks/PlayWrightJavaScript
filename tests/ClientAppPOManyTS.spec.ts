import { test, expect } from '@playwright/test';
//import {customTest} from '../utils_ts/test-base';
import {PageManager} from '../pageobjects_ts/PageManager';
//Json -> String -> js object
const dataSet = JSON.parse(JSON.stringify(require("../utils/placeorderTestDataMany.json")));


for(const data of dataSet)
{

test(`Client App login for ${data.productName}`, async ({ page }) => {
   //js file- Login js, DashboardPage
   const pageManager = new PageManager(page);
   const products = page.locator(".card-body");
   const loginPage = pageManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(data.username, data.password);

   const dashboardPage = pageManager.getDashboardPage();
   await dashboardPage.searchProductAddToCart(data.productName);
   await dashboardPage.navigateToCart();
   //await page.locator(".card-body b").first().waitFor();


   //await page.pause();
   const cartPage = pageManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(data.productName);
   await cartPage.Checkout();

   const ordersReviewPage = pageManager.getOrdersReviewPage();
   await ordersReviewPage.searchCountryAndSelect("ind", "India");

   let orderId:any;
   orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = pageManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});
}
