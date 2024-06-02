import { Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { FoodsService } from '../../foods.service';
import { Product } from '../../product';
@Component({
  selector: 'app-productbody',
  standalone: true,
  imports: [],
  templateUrl: './productbody.component.html'
})
export class ProductbodyComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  foodService: FoodsService = inject(FoodsService);
  productId = -1;
  product: Product | undefined;
  constructor() {
      this.productId = Number(this.route.snapshot.params['id']);
      this.product = this.foodService.getFoodById(this.productId);
  }
}
