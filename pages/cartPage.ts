import { Locator, Page } from "@playwright/test";

export class CartPage {
    page: Page;
    cartHeading: Locator;
    cartItems: Locator;
    checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartHeading = this.page.getByRole("heading", { name: "My Cart" });
        this.cartItems = this.page.locator("li.items");
        this.checkoutButton = this.page.getByRole("button", { name: "Checkout" });
    }

    getCartItem(productName: string): Locator {
        return this.cartItems.filter({
            has: this.page.getByRole("heading", { name: productName, exact: true }),
        });
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}