import { Page, test } from "@playwright/test"
import { BasePage } from "../pages/base-page"
import { TWO_SECONDS_TIMEOUT } from "../data/constants";
export class LoginPage extends BasePage {
    txtUserName = "//input[@id='user-name']";
    txtPassWord = "//input[@id='password']";
    btnLogin = "//input[@id='login-button']";
    constructor(page: Page) {
        super(page);

    }
    async navigateToLoginPage() {
        await this.getPageChrome("https://www.saucedemo.com/");
       // await this.navigateTo("https://www.saucedemo.com/");
    }
    async fillUserName(username: string) {
        await this.page.locator(this.txtUserName).fill(username);
    }
    async fillPassWord(password: string) {
        await this.page.locator(this.txtPassWord).fill(password);
    }
    async clickLogin() {
        await this.page.locator(this.btnLogin).click();
    }
    async login(username: string, password: string) {
        await this.fillUserName(username);
        await this.fillPassWord(password);
        await this.clickLogin();

    }

}