import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { ProductWithQty } from '../../product-with-qty';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styles: ``
})
export class CartItemComponent {
  @Input() productWithQty!: ProductWithQty;

}
