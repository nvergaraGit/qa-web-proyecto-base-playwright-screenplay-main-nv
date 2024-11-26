import { Page } from "@playwright/test";
import { LoginPage } from "../userinterfaces/LoginPage";

export class Login{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async setDataForm(username: string, password: string){
        await this.page.hover(LoginPage.DROPDOWN);
        await this.page.click(LoginPage.BTN_LOGGIN);
        await this.page.fill(LoginPage.TXT_USERNAME, username);
        await this.page.fill(LoginPage.TXT_PASSWORD, password);
        
    }

    async clickToLogin(){
        await this.page.click(LoginPage.BTN_SUBMIT);
    }
}
