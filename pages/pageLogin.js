
import { Locator, Page } from "@playwright/test";

export class pageLogin {

        constructor(page){
            this.page = page
            this.email = this.page.getByPlaceholder('email@example.com')
            this.password = this.page.locator('#userPassword')
            this.loginButtons = this.page.locator('#login')
            this.errorMessages= this.page.locator('#toast-container')
            this.homePageIdentifiers= this.page.locator('[routerlink="/dashboard/"]')

        }
        // create the methods:: 
        // launch url  and  loginIntoApplication

        async launchUrls(url){
            await this.page.goto(url)
        }

        async loginIntoApplicationss(username , password){
            await this.email.fill(username)
            await this.password.fill(password)
            await this.loginButtons.click()
        }
}

