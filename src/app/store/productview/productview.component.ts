import { Component, Input } from '@angular/core';
import { Product } from '../../product';
@Component({
  selector: 'app-productview',
  standalone: true,
  imports: [],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.css'
})
export class ProductviewComponent {
  @Input() product!: Product;
  
}
