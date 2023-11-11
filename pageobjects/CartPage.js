const {test,expect}=require('@playwright/test')
class CartPage{


    constructor(page){

        this.page=page
        this.cartProducts=page.locator("div li").first()
        this.productsText=page.locator("card-body b")
        this.cart=page.locator("[routerlink*='cart']")
        this.orders=page.locator("button[routerlink*='myorders']")
        this.checkout=page.locator('button:has-text("Checkout")')
    }

   async VerifyProductDisplayed(productName){

        await this.cartProducts.waitFor()
        const bool =await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();
    }

    async Checkout(){

        await this.checkout.click()
    }

    getProductLocator(productName){

        return this.page.locator("h3:has-text('adidas original')")
    }
    



}
export default CartPage;