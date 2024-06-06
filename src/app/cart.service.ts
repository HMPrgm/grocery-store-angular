import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductWithQty } from './product-with-qty';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart : ProductWithQty[] = [

  ]
  
  getCart(): ProductWithQty[] {
    return this.cart;
  }
  addToCart(product : Product){
    const existingProduct : ProductWithQty | undefined = this.cart.find(p => {
      p.product.id == product.id && p.product.price == product.price;
    })
    if (existingProduct) {
      existingProduct.qty += 1;
    }
    else {
      this.cart.push({product, qty:1});
    }
  }
  getPrice(): string{
    return "$" + this.cart.map(p => p.product.price * p.qty).reduce((a,c)=> a+c,0).toFixed(2);
  }
  checkout():void {
    this.cart = []
  }
}
