import { expect, test } from "@playwright/test";
import { CartPage } from "../pages/cartPage";
import { dashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import { PaymentPage } from "../pages/payment";
import product from "../testdata/product.json";
import data from "../testdata/login.json";
import payment from "../testdata/payment.json";

let loginPage: LoginPage;
let dashboard: dashboardPage;
let cartPage: CartPage;
let paymentPage: PaymentPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboard = new dashboardPage(page);
    cartPage = new CartPage(page);
    paymentPage = new PaymentPage(page);

    await loginPage.launchUrl(data.url);
    await loginPage.loginIntoApplication(data.email, data.password);
    await expect(loginPage.homePageIdentifier).toBeVisible();
});

test("complete payment for a product in the cart", async ({ page }) => {
    const productName = product[0].productName;

    await dashboard.searchProduct(productName, "Add To Cart");
    await dashboard.naviagateToCart();
    await expect(cartPage.getCartItem(productName)).toBeVisible();
    await cartPage.proceedToCheckout();

    await expect(paymentPage.paymentHeading).toBeVisible();
    await paymentPage.enterPaymentDetails(payment);
    await paymentPage.placeOrder();

    await expect(page).toHaveURL(/\/dashboard\/thanks/);
    await expect(paymentPage.orderConfirmation).toBeVisible();
});
