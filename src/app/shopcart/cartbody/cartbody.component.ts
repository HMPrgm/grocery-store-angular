import { Component, inject } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { Product } from '../../product';
import { CommonModule } from "@angular/common";
import { ProductWithQty } from '../../product-with-qty';
import { CartService } from '../../cart.service';

@Component({
    selector: 'app-cartbody',
    standalone: true,
    templateUrl: './cartbody.component.html',
    styles: ``,
    imports: [CartItemComponent, CommonModule]
})
export class CartbodyComponent {
    cartService: CartService = inject(CartService);

    getCart(): ProductWithQty[]{
        return this.cartService.getCart();
    }
    getPrice(): string{
        return this.cartService.getPrice();
    }
}
