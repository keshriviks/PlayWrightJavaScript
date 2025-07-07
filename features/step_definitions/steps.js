const { Given, When, Then } = require('@cucumber/cucumber')
const { PageManager } = require('../../pageobjects/PageManager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');


Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    //const browser = await playwright.chromium.launch({headless: false});
    //const context = await browser.newContext();
    //const page = await context.newPage();
    // this.pageManager = new PageManager(thispage);
    const products = this.page.locator(".card-body");
    const loginPage = this.pageManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});



When('Add {string} to Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.pageManager.getDashboardPage();
    await this.dashboardPage.searchProductAddToCart(productName);
    await this.dashboardPage.navigateToCart();
});




Then('Verify {string} is displayed in the Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.cartPage = this.pageManager.getCartPage();
    await this.cartPage.VerifyProductIsDisplayed(productName);
});


When('Enter valid details and Place the Order', async function () {
    await this.cartPage.Checkout();
    const ordersReviewPage = this.pageManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
});

Then('Verify order is present in the OrderHistory', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = pageManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

Given('a login to Ecommerce2 application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {

    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
    const userName = this.page.locator('#username');
    const signIn = this.page.locator("#signInBtn");
    const cardTitles = this.page.locator(".card-body a");
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    //css 
    await userName.fill("rahulshetty");
    await this.page.locator("[type='password']").fill("learning");
    await signIn.click();
});


Then('Verify Error message is displayed', async function () {
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
});