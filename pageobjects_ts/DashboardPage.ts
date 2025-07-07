import { test,expect, Locator, Page} from '@playwright/test';

export class DashboardPage {

    page: Page;
    products: Locator;
    productsText: Locator;
    cartButton: Locator;
    orders: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cartButton = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");

    }

    async searchProductAddToCart(productName: string) {
        const titles = await this.productsText.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                //add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async navigateToCart() {
        await this.cartButton.click();
    }

    async navigateToOrders() {
        await this.orders.click();
    }

}

module.exports = { DashboardPage };
