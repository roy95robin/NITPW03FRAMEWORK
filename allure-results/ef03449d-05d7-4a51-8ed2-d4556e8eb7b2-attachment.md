# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: payment.spec.ts >> complete payment for a product in the cart
- Location: tests\payment.spec.ts:26:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('.ta-results button').filter({ hasText: 'India' }) resolved to 2 elements:
    1) <button type="button" _ngcontent-pwf-c37="" class="ta-item list-group-item ng-star-inserted">…</button> aka getByRole('button', { name: ' British Indian Ocean' })
    2) <button type="button" _ngcontent-pwf-c37="" class="ta-item list-group-item ng-star-inserted">…</button> aka getByRole('button', { name: ' India' })

Call log:
  - waiting for locator('.ta-results button').filter({ hasText: 'India' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [aria-hidden] [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ADIDAS ORIGINAL
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12" [selected]
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16"
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30" [selected]
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]: "123"
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]: Test User
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: 123 Test Street
            - textbox [ref=e81]: 123 Test Street
            - generic [ref=e83]:
              - textbox "Select Country" [active] [ref=e84]: India
              - generic [ref=e85]:
                - button " British Indian Ocean Territory" [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]:
                    - generic [ref=e89]: 
                    - text: British Indian Ocean Territory
                - button " India" [ref=e90] [cursor=pointer]:
                  - generic [ref=e91]:
                    - generic [ref=e92]: 
                    - text: India
            - generic [ref=e93]: Place Order
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export interface PaymentDetails {
  4  |     cardNumber: string;
  5  |     expiryMonth: string;
  6  |     expiryYear: string;
  7  |     cvv: string;
  8  |     cardholderName: string;
  9  |     shippingAddress: string;
  10 |     country: string;
  11 | }
  12 | 
  13 | export class PaymentPage {
  14 |     page: Page;
  15 |     paymentHeading: Locator;
  16 |     cardNumber: Locator;
  17 |     expiryDate: Locator;
  18 |     cvv: Locator;
  19 |     cardholderName: Locator;
  20 |     shippingAddress: Locator;
  21 |     country: Locator;
  22 |     placeOrderButton: Locator;
  23 | 
  24 |     constructor(page: Page) {
  25 |         this.page = page;
  26 |         this.paymentHeading = this.page.getByText("Payment Method", { exact: true });
  27 |         this.cardNumber = this.page.locator(".field").filter({ hasText: "Credit Card Number" }).locator("input");
  28 |         this.expiryDate = this.page.locator("select.input.ddl");
  29 |         this.cvv = this.page.locator(".field").filter({ hasText: "CVV Code" }).locator("input");
  30 |         this.cardholderName = this.page.locator(".field").filter({ hasText: "Name on Card" }).locator("input");
  31 |         this.shippingAddress = this.page.locator(".details__user input.input.txt").nth(0);
  32 |         this.country = this.page.getByPlaceholder("Select Country");
  33 |         this.placeOrderButton = this.page.locator("a.action__submit");
  34 |     }
  35 | 
  36 |     async enterPaymentDetails(details: PaymentDetails) {
  37 |         await this.cardNumber.fill(details.cardNumber);
  38 |         await this.expiryDate.nth(0).selectOption(details.expiryMonth);
  39 |         await this.expiryDate.nth(1).selectOption(details.expiryYear);
  40 |         await this.cvv.fill(details.cvv);
  41 |         await this.cardholderName.fill(details.cardholderName);
  42 |         await this.shippingAddress.fill(details.shippingAddress);
  43 |         await this.country.pressSequentially(details.country);
> 44 |         await this.page.locator(".ta-results button").filter({ hasText: details.country }).click();
     |                                                                                            ^ Error: locator.click: Error: strict mode violation: locator('.ta-results button').filter({ hasText: 'India' }) resolved to 2 elements:
  45 |     }
  46 | 
  47 |     async placeOrder() {
  48 |         await this.placeOrderButton.click();
  49 |     }
  50 | }
```