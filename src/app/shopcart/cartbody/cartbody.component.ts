import { Component, inject } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CommonModule } from "@angular/common";
import { ProductWithQty } from '../../product-with-qty';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-cartbody',
    standalone: true,
    templateUrl: './cartbody.component.html',
    styles: ``,
    imports: [CartItemComponent, CommonModule, ReactiveFormsModule]
})
export class CartbodyComponent {
    api: ApiService = inject(ApiService);
    router: Router = inject(Router);
    cartItems: ProductWithQty[];

    checkOutForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    })

    constructor() {
        this.cartItems = []
        this.getCart()
    }
    async getCart() {
        this.cartItems = await this.api.getCart();
    }
    getPrice(): string {
        return "$" + this.cartItems.map(p => p.product.price * p.qty).reduce((a, c) => a + c, 0).toFixed(2);
    }

    async checkout() {
        const email = this.checkOutForm.value.email;
        if (!(email === undefined || email === null || email === "" || !email.includes("@"))) {
            console.log(await this.api.checkout(email));
            this.router.navigate(['/'])
        }
    }
}