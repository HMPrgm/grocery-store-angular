import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
// import { FoodsService } from '../../foods.service';
import { Product } from '../../product';

import { ApiService } from '../../api.service';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-productbody',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './productbody.component.html'
})
export class ProductbodyComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  // foodService: FoodsService = inject(FoodsService);
 
  api: ApiService = inject(ApiService);
  router: Router = inject(Router)

  productId: string;
  product: Product | undefined;

  addToCart = new FormGroup({
    qty: new FormControl(1)
  })


  constructor() {
    this.productId = this.route.snapshot.params['id'];
    this.initialize(this.productId)
  }

  async initialize(productId: string) {
    this.product = await this.api.getProductById(productId);
  }

  async submitAddToCart(){
    if (this.product !== undefined && this.addToCart.value.qty !== undefined && this.addToCart.value.qty !== null) {
      await this.api.addToCart(this.product, this.addToCart.value.qty)
      this.router.navigate(['/cart']);
    }
  }

}
