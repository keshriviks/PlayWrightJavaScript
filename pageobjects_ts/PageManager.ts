import {LoginPage} from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { OrdersHistoryPage } from './OrdersHistoryPage';
import { OrdersReviewPage } from './OrdersReviewPage';
import { CartPage } from './CartPage';
import { Page } from '@playwright/test';

/**
 * PageManager class to manage different page objects in the application.
 * It initializes and provides access to various page objects like LoginPage, DashboardPage, etc.
 */

export class PageManager {

    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    ordersHistoryPage: OrdersHistoryPage;
    ordersReviewPage: OrdersReviewPage;
    cartPage: CartPage;
    /**
     * Constructor to initialize the PageManager with a Playwright Page instance.
     * @param {Page} page - The Playwright Page instance.
     */
    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
    getCartPage() {
        return this.cartPage;
    }
    getOrdersHistoryPage() {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage() {
        return this.ordersReviewPage;
    }

}

module.exports = { PageManager };