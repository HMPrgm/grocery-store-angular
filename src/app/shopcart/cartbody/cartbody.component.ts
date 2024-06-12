import { Component, inject } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { Product } from '../../product';
import { CommonModule } from "@angular/common";
import { ProductWithQty } from '../../product-with-qty';
import { ApiService } from '../../api.service';

@Component({
    selector: 'app-cartbody',
    standalone: true,
    templateUrl: './cartbody.component.html',
    styles: ``,
    imports: [CartItemComponent, CommonModule]
})
export class CartbodyComponent {
    api: ApiService = inject(ApiService);
    cartItems: ProductWithQty[];

    constructor(){
        this.cartItems = []
        this.getCart()
    }
    async getCart(){
        this.cartItems =  await this.api.getCart();
    }
    getPrice(): string{
        return "$" + this.cartItems.map(p => p.product.price * p.qty).reduce((a,c)=> a+c,0).toFixed(2);
    }
}
