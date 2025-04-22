import { Page, BrowserContext, Browser, chromium, firefox } from "@playwright/test";
import { Context } from "vm";
export class BasePage {
    page: Page;
    context: BrowserContext;
    browser: Browser;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
    async getPageChrome(url: string) {
        this.browser = await chromium.launch();
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        await this.page.goto(url);
    }

    async getPageFirefox(url: string) {
        this.browser = await firefox.launch();
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        await this.page.goto(url);
    }

}