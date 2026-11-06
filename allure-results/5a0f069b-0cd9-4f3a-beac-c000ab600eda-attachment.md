# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: payment.spec.ts >> complete payment for a product in the cart
- Location: tests\payment.spec.ts:26:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/dashboard\/thankyou/
Received string:  "https://rahulshettyacademy.com/client/#/dashboard/thanks?prop=%5B%226aec9d3692a4341c4c05d338%22%5D"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    2 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://rahulshettyacademy.com/client/#/dashboard/order?prop=%5B%226960eae1c941646b7a8b3ed3%22%5D"
    12 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://rahulshettyacademy.com/client/#/dashboard/thanks?prop=%5B%226aec9d3692a4341c4c05d338%22%5D"

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- table:
  - rowgroup:
    - 'row "Thankyou for the order. You can see all the Orders in Orders History Page | 6aec9d3692a4341c4c05d338 | Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV Questions? We''re on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com"':
      - 'cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6aec9d3692a4341c4c05d338 | Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV Questions? We''re on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com"':
        - table:
          - rowgroup:
            - row:
              - cell
            - row:
              - cell
            - row:
              - cell
            - row "Thankyou for the order. You can see all the Orders in Orders History Page | 6aec9d3692a4341c4c05d338 |":
              - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6aec9d3692a4341c4c05d338 |":
                - table:
                  - rowgroup:
                    - row "Thankyou for the order. You can see all the Orders in Orders History Page | 6aec9d3692a4341c4c05d338 |":
                      - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6aec9d3692a4341c4c05d338 |":
                        - table:
                          - rowgroup:
                            - row "Thankyou for the order.":
                              - cell "Thankyou for the order.":
                                - heading "Thankyou for the order." [level=1]
                            - row "You can see all the Orders in Orders History Page":
                              - cell "You can see all the Orders in Orders History Page"
                            - row "| 6aec9d3692a4341c4c05d338 |":
                              - cell "| 6aec9d3692a4341c4c05d338 |"
            - row:
              - cell
            - 'row "Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV"':
              - 'cell "Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV"':
                - table:
                  - rowgroup:
                    - row:
                      - cell
                    - 'row "Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship"':
                      - cell "Queen":
                        - img "Queen"
                      - 'cell "ADIDAS ORIGINAL Qty: 1"'
                      - cell "$ 11500 Ready to Ship":
                        - text: $ 11500
                        - strong: Ready to Ship
                    - row "Items in your order may ship separately. View your order for shipping updates.":
                      - cell "Items in your order may ship separately. View your order for shipping updates."
                    - row "Click To Download Order Details in CSV":
                      - button "Click To Download Order Details in CSV"
            - row:
              - cell
            - row "Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com":
              - cell "Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com":
                - table:
                  - rowgroup:
                    - row:
                      - cell
                    - row "Questions? We're on call.":
                      - cell "Questions? We're on call."
                    - row "Monday to Friday 9am - 9pm":
                      - cell "Monday to Friday 9am - 9pm"
                    - row "Saturday to Sunday 10am - 6pm":
                      - cell "Saturday to Sunday 10am - 6pm"
                    - row "dummywebsite@rahulshettyacademy.com":
                      - cell "dummywebsite@rahulshettyacademy.com"
                    - row:
                      - cell
            - row:
              - cell
            - row
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | import { CartPage } from "../pages/cartPage";
  3  | import { dashboardPage } from "../pages/dashboardPage";
  4  | import { LoginPage } from "../pages/loginPage";
  5  | import { PaymentPage } from "../pages/payment";
  6  | import product from "../testdata/product.json";
  7  | import data from "../testdata/login.json";
  8  | import payment from "../testdata/payment.json";
  9  | 
  10 | let loginPage: LoginPage;
  11 | let dashboard: dashboardPage;
  12 | let cartPage: CartPage;
  13 | let paymentPage: PaymentPage;
  14 | 
  15 | test.beforeEach(async ({ page }) => {
  16 |     loginPage = new LoginPage(page);
  17 |     dashboard = new dashboardPage(page);
  18 |     cartPage = new CartPage(page);
  19 |     paymentPage = new PaymentPage(page);
  20 | 
  21 |     await loginPage.launchUrl(data.url);
  22 |     await loginPage.loginIntoApplication(data.email, data.password);
  23 |     await expect(loginPage.homePageIdentifier).toBeVisible();
  24 | });
  25 | 
  26 | test("complete payment for a product in the cart", async ({ page }) => {
  27 |     const productName = product[0].productName;
  28 | 
  29 |     await dashboard.searchProduct(productName, "Add To Cart");
  30 |     await dashboard.naviagateToCart();
  31 |     await expect(cartPage.getCartItem(productName)).toBeVisible();
  32 |     await cartPage.proceedToCheckout();
  33 | 
  34 |     await expect(paymentPage.paymentHeading).toBeVisible();
  35 |     await paymentPage.enterPaymentDetails(payment);
  36 |     await paymentPage.placeOrder();
  37 | 
> 38 |     await expect(page).toHaveURL(/\/dashboard\/thankyou/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  39 | });
  40 | 
```