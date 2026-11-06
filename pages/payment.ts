import { Locator, Page } from "@playwright/test";

export interface PaymentDetails {
    cardNumber: string;
    expiryMonth: string;
    expiryDay: string;
    cvv: string;
    cardholderName: string;
    shippingAddress: string;
    country: string;
}

export class PaymentPage {
    page: Page;
    paymentHeading: Locator;
    cardNumber: Locator;
    expiryDate: Locator;
    cvv: Locator;
    cardholderName: Locator;
    shippingAddress: Locator;
    country: Locator;
    placeOrderButton: Locator;
    orderConfirmation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.paymentHeading = this.page.getByText("Payment Method", { exact: true });
        this.cardNumber = this.page.locator(".field").filter({ hasText: "Credit Card Number" }).locator("input");
        this.expiryDate = this.page.locator("select.input.ddl");
        this.cvv = this.page.locator(".field").filter({ hasText: "CVV Code" }).locator("input");
        this.cardholderName = this.page.locator(".field").filter({ hasText: "Name on Card" }).locator("input");
        this.shippingAddress = this.page.locator(".details__user input.input.txt").nth(0);
        this.country = this.page.getByPlaceholder("Select Country");
        this.placeOrderButton = this.page.locator("a.action__submit");
        this.orderConfirmation = this.page.getByRole("heading", { name: "Thankyou for the order." });
    }

    async enterPaymentDetails(details: PaymentDetails) {
        await this.cardNumber.fill(details.cardNumber);
        await this.expiryDate.nth(0).selectOption(details.expiryMonth);
        await this.expiryDate.nth(1).selectOption(details.expiryDay);
        await this.cvv.fill(details.cvv);
        await this.cardholderName.fill(details.cardholderName);
        await this.shippingAddress.fill(details.shippingAddress);
        await this.country.pressSequentially(details.country);
        await this.page.getByRole("button", { name: new RegExp(`${details.country}$`) }).click();
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }
}