import { Component, Input } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styles: ``
})
export class CartItemComponent {
  @Input() product!: Product;
}
