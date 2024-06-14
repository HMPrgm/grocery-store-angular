import { Component, Input, inject } from '@angular/core';
import { ProductviewComponent } from "../productview/productview.component";
import { Product } from '../../product';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';

@Component({
    selector: 'app-productgroup',
    standalone: true,
    templateUrl: './productgroup.component.html',
    imports: [ProductviewComponent, CommonModule]
})
export class ProductgroupComponent {
    @Input() category!: string;
    productList: Product[];
    api: ApiService = inject(ApiService);
    constructor() {
        
        this.productList = []
        this.updateProductList()
    }

    async updateProductList() {
        this.productList = await this.api.getProducts()
        this.productList = this.productList.filter(p => p.category.toLowerCase() === this.category.toLowerCase())
    }

}
