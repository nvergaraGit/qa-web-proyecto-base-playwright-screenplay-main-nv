import { Page, expect } from "@playwright/test";
import { HomePage } from "../userinterfaces/HomePage";
import { Helpers } from "../utils/Helpers";

export class LoginQuestion{

    private page: Page;

    constructor (page: Page){
        this.page = page;
    }

    async wishListIsPresent (){

        const wishListWeb = await this.page.locator(HomePage.WISHLIST);

        if(await wishListWeb.isVisible()){
           await expect(wishListWeb).toContainText(Helpers.WISHLIST_TEXT);

        }
    }
}