
import { Locator, Page } from "@playwright/test";
export class dashboardPage{
    page:Page
    products:Locator
    homePageProductPrice:Locator
    viewPageProductPrice:Locator
    viewPageProductName:Locator
    addToCartMessage:Locator
    cart:Locator

    constructor(page:Page){
        this.page = page
        this.products = this.page.locator('div.card-body')
        this.homePageProductPrice = this.page.locator('div.text-muted')
        this.viewPageProductName= this.page.locator('.rtl-text h2')
        this.viewPageProductPrice= this.page.locator('.rtl-text h3')
        this.addToCartMessage = this.page.locator('#toast-container')
        this.cart = this.page.locator('[routerlink="/dashboard/cart"]')
    }

// create the methods: 
// searchProduct is a method name and it can be anything but some meaningful name
async searchProduct(productName:string , button: 'View' | "Add To Cart"){
    // wait for atleast one product to load on the page 
    await this.products.nth(0).waitFor()
    const countOfProduct = await this.products.count()
    // use the for loop to iterate through the list of products
    for(let i=0;i<countOfProduct;i++){
        // pick one product from the list
        const product = await this.products.nth(i)
        // read the name of the product
        const productText = await product.locator('b').textContent() // all the product name will be captured
        // Compare the captured product name with your test productname
        if(productText?.trim().toLowerCase()=== productName.trim().toLowerCase()){
            // find the button by the text
            await product.getByRole('button',{name:button}).click()
            break
        }
    }
}
// creating the method to navigate to cart
 async naviagateToCart(){
            await this.cart.click()
        }

}