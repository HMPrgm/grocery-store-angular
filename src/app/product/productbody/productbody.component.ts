import { Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { FoodsService } from '../../foods.service';
import { Product } from '../../product';
import { CartService } from '../../cart.service';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-productbody',
  standalone: true,
  imports: [],
  templateUrl: './productbody.component.html'
})
export class ProductbodyComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  foodService: FoodsService = inject(FoodsService);
  cartService: CartService = inject(CartService);
  api: ApiService = inject(ApiService);
  
  productId = -1;
  product: Product | undefined;

  
  constructor() { 
      this.productId = Number(this.route.snapshot.params['id']);
      this.product = this.foodService.getFoodById(this.productId);
  }

  addProduct(p:Product | undefined): void{
    console.log(this.api.getProducts().subscribe());
    if (!p) {return;}
    this.cartService.addToCart(p);
    console.log(this.cartService.getCart())
    
  }

}
