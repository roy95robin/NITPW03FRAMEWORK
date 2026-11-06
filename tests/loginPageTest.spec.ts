
/*
 email = 'jegow99556@flosek.com'
 password = 'Test@123'

*/

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'

// first time we will verify with the hardcoded value

const url= 'https://rahulshettyacademy.com/client/#/auth/login'
let email = 'jegow99556@flosek.com'
let password = 'Test@123'
let errorMessage= "Incorrect email or password."
let invalidPassword= 'sdfsdfdsfdsf'

// hooks concepts in playwright::

let lp:LoginPage // creating the reference at the global level

test.beforeEach(async ({page}) =>{
      lp = new LoginPage(page)
    await lp.launchUrl(url)
})

test(' valid login user', async({page}) =>{
    // create the object/instance of the class 
    // const lp = new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})
test(' invalid login user', async({page}) =>{

    // create the object/instance of the class 
    // const lp = new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(email, invalidPassword)
    await expect(lp.errorMessage).toBeVisible()
})
