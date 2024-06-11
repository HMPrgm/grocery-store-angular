import { Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
// import { FoodsService } from '../../foods.service';
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
  // foodService: FoodsService = inject(FoodsService);
  cartService: CartService = inject(CartService);
  api: ApiService = inject(ApiService);
  
  productId: string;
  product: Product | undefined;

  
  constructor() { 
      this.productId = this.route.snapshot.params['id'];
      this.initialize(this.productId)
  }

  async initialize(productId:string)
  {
    this.product = await this.api.getProductById(productId);
    console.log(this.product)
  }

  addProduct(p:Product | undefined): void{
    console.log(this.api.getProducts());
    if (!p) {return;}
    this.cartService.addToCart(p);
    
  }

}
