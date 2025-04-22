import { expect, Page, test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { TWO_SECONDS_TIMEOUT } from "../data/constants";
import { Login_Data } from "../data/login-data";

//Login success
test("TC_001", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_001.username);
        await loginPage.fillPassWord(Login_Data.TC_001.password);
        await loginPage.clickLogin();
        await expect(page.locator("//h3[@data-test='error']")).toBeHidden();
    })
})

//Login fail with user is blocked
test("TC_002", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async () => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_002.username);
        await loginPage.fillPassWord(Login_Data.TC_002.password);
        await loginPage.clickLogin();
        await expect(page.locator("//h3[@data-test='error']")).toContainText("Epic sadface: Sorry, this user has been locked out.");
    })
})

//Login fail with user is blocked
test("TC_003", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_003.username);
        await loginPage.fillPassWord(Login_Data.TC_003.password);
        await loginPage.clickLogin();
        await expect(page.locator("//h3[@data-test='error']")).toBeHidden();
    })
})

//Login fail with user is performance_glitch_user
test("TC_004", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_004.username);
        await loginPage.fillPassWord(Login_Data.TC_004.password);
        await loginPage.clickLogin();
        await expect(page.locator("//div[@class='app_logo']")).toContainText("Swag Labs");
    })
})

//Login fail with user is error_user
test("TC_005", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_005.username);
        await loginPage.fillPassWord(Login_Data.TC_005.password);
        await loginPage.clickLogin();
        await expect(page.locator("//div[@class='app_logo']")).toContainText("Swag Labs");
    })
})

//Login fail with user is error_user
test("TC_006", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_006.username);
        await loginPage.fillPassWord(Login_Data.TC_006.password);
        await loginPage.clickLogin();
        await expect(page.locator("//div[@class='app_logo']")).toContainText("Swag Labs");
    })
})


test("TC_007", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_007.username);
        await loginPage.fillPassWord(Login_Data.TC_007.password);
        await loginPage.clickLogin();
        await expect(page.locator("//h3[@data-test='error']")).toContainText("Epic sadface: Username is required");
    })
})


test("TC_008", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_008.username);
        await loginPage.fillPassWord(Login_Data.TC_008.password);
        await loginPage.clickLogin();
        await expect(page.locator("//h3[@data-test='error']")).toContainText("Epic sadface: Password is required");
    })
})


test("TC_009", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_009.username);
        await loginPage.fillPassWord(Login_Data.TC_009.password);
        await loginPage.clickLogin();
        await expect(page.locator("//h3[@data-test='error']")).toContainText("Epic sadface: Username is required");
    })
})


test("TC_010", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_010.username);
        await loginPage.fillPassWord(Login_Data.TC_010.password);
        await loginPage.clickLogin();
        await expect(page.locator("//h3[@data-test='error']")).toContainText("Epic sadface: Username and password do not match any user in this service");
    })
})

test("TC_011", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Go to URL", async ({ }) => {
        await loginPage.navigateToLoginPage();
    })
    
    await test.step("Action fill and click login", async () => {
        await loginPage.fillUserName(Login_Data.TC_011.username);
        await loginPage.fillPassWord(Login_Data.TC_011.password);
        await loginPage.clickLogin();
        await expect(page.locator("//h3[@data-test='error']")).toContainText("Epic sadface: Username and password do not match any user in this service");
    })
})