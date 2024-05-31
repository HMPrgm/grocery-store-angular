import { Component, inject } from '@angular/core';
import { ProductviewComponent } from "../productview/productview.component";
import { Product } from '../../product';
import { CommonModule } from '@angular/common';
import { FoodsService } from '../../foods.service';

@Component({
    selector: 'app-productgroup',
    standalone: true,
    templateUrl: './productgroup.component.html',
    styleUrl: './productgroup.component.css',
    imports: [ProductviewComponent, CommonModule]
})
export class ProductgroupComponent {
    productList: Product[];
    foodsService: FoodsService = inject(FoodsService);
    constructor() {
        this.productList = this.foodsService.getAllFoods();
    }

}
