import { expect, test } from "@playwright/test";
import { CartPage } from "../pages/cartPage";
import { dashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import product from "../testdata/product.json";
import data from "../testdata/login.json";

let loginPage: LoginPage;
let dashboard: dashboardPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboard = new dashboardPage(page);
    cartPage = new CartPage(page);

    await loginPage.launchUrl(data.url);
    await loginPage.loginIntoApplication(data.email, data.password);
    await expect(loginPage.homePageIdentifier).toBeVisible();
});

test("add a product and continue to checkout from the cart", async ({ page }) => {
    const productName = product[0].productName;

    await dashboard.searchProduct(productName, "Add To Cart");
    await dashboard.naviagateToCart();

    await expect(cartPage.cartHeading).toBeVisible();
    await expect(cartPage.getCartItem(productName)).toBeVisible();
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL(/\/dashboard\/order/);
});
