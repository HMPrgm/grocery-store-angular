import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductWithQty } from './product-with-qty';
const axios = require('axios');

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = "http://localhost:5001/"
  
  constructor() {}

  async getProducts() {//:Product[] {
    var products = await axios.get(`${this.apiUrl}/products`);
    console.log(products)
  }

  // getCart(): ProductWithQty[] {

  // }

  addToCart(p:Product): void{

  }
}
