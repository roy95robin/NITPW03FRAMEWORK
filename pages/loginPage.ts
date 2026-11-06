
// Page layers -- what all things will be present inside the page
/*
Locators and methods should be present inside this layer. 
class >> page properties >> constructor >> methods
*/
import { Locator, Page } from "@playwright/test";

export class LoginPage {
    // class consists of properties :: locators and methods
    // locators when passed inside the class will be acting as properties of an object
    // create all the  properties of the page inside the class
    page:Page
    email:Locator
    password:Locator
    loginButton:Locator
    errorMessage: Locator
    homePageIdentifier:Locator

        constructor(page:Page){
            this.page = page
            this.email = this.page.getByPlaceholder('email@example.com')
            this.password = this.page.locator('#userPassword')
            this.loginButton = this.page.locator('#login')
            this.errorMessage= this.page.locator('#toast-container')
            this.homePageIdentifier= this.page.locator('[routerlink="/dashboard/"]')

        }
        // create the methods:: 
        // launch url  and  loginIntoApplication

        async launchUrl(url:string){
            await this.page.goto(url)
        }

        async loginIntoApplication(username:string , password:string){
            await this.email.fill(username)
            await this.password.fill(password)
            await this.loginButton.click()
        }
}