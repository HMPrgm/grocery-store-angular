import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { ProductWithQty } from './product-with-qty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = "http://localhost:5001"
  products: Product[] | null;


  constructor(private http: HttpClient) {
    this.products = null;
  }

  async getProducts():Promise<Product[]> {
    if (!this.products)
      this.products = (await this.getProductsPromise('products') as Product[]);
    return this.products;
  }

  async getProductById(_id:string): Promise<Product | undefined> {
    if (!this.products)
      this.products = (await this.getProductsPromise('products') as Product[]);
    return this.products.find(val => val._id === _id);
  }

  private async getProductsPromise(handle:string):Promise<Object>{
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiUrl}/${handle}`)
      .subscribe({
        next: (data) => resolve(data),
        error: (err)=>reject(err)
      })
    })
  }

  async getCart(): Promise<ProductWithQty[]> {
      return (await this.getProductsPromise('cart') as ProductWithQty[]);
  }
  addToCart(p:Product): void{
    const info = {id: p._id}
    this.http.post<any>(`${this.apiUrl}/cart`,info,{
      headers: { 'Content-Type': 'application/json' }
    }).subscribe()
  }
}
