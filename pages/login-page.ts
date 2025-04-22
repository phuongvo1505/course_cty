import { expect, Page, test } from "@playwright/test"
import { BasePage } from "../pages/base-page"
import { TWO_SECONDS_TIMEOUT } from "../data/constants";
export class LoginPage extends BasePage {
    txtUserName = "//input[@id='user-name']";
    txtPassWord = "//input[@id='password']";
    btnLogin = "//input[@id='login-button']";
    // constructor(page: Page) {
    //     super(page);

    // }
    async navigateToLoginPage() {
        await this.getPageFirefox("https://www.saucedemo.com/");
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
    async checkLoginTC002() {
        await expect(this.page.locator("//h3[@data-test='error']")).toContainText("Epic sadface: Sorry, this user has been locked out.");
    }
    async checkLoginTC003() {
        await expect(this.page.locator("//h3[@data-test='error']")).toBeHidden();
        
    }
    
    async login(username: string, password: string) {
        await this.fillUserName(username);
        await this.fillPassWord(password);
        await this.clickLogin();
    }

    
}