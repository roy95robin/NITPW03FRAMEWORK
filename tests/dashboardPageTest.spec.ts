
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'

const url= 'https://rahulshettyacademy.com/client/#/auth/login'
let email = 'jegow99556@flosek.com'
let password = 'Test@123'
let productName= 'ADIDAS ORIGINAL'

let lp :LoginPage
let dp:dashboardPage

test.beforeEach(async({page}) =>{
    lp = new LoginPage(page)
    dp= new dashboardPage(page)
    await lp.launchUrl(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('add to cart', async() =>{

    await dp.searchProduct(productName, "Add To Cart")
    await expect(dp.addToCartMessage).toBeVisible()
    await dp.naviagateToCart()

})
test('View product', async() =>{
await dp.searchProduct(productName,'View')
await expect(dp.viewPageProductName).toHaveText(productName)
    
})