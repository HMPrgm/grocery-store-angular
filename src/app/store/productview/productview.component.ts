import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productview',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.css'
})
export class ProductviewComponent {
  @Input() product!: Product;
  
}
