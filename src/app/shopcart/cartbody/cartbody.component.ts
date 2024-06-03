import { Component } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { Product } from '../../product';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-cartbody',
    standalone: true,
    templateUrl: './cartbody.component.html',
    styles: ``,
    imports: [CartItemComponent, CommonModule]
})
export class CartbodyComponent {
    cartList: Product[] = [
        {
            id: 7,
            name: "Strawberries",
            photo: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
            price: 3.49,
            category: "Fruit"
        },
        {
            id: 8,
            name: "Orange",
            photo: "https://cdn-icons-png.flaticon.com/512/721/721098.png",
            price: 1.49,
            category: "Fruit"
        }
    ]
    apple: Product = {
        id: 8,
        name: "Apple",
        photo: "https://cdn-icons-png.flaticon.com/512/721/721098.png",
        price: 1.49,
        category: "Fruit"
    }
}
