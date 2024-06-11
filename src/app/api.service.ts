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
  
  constructor(private http: HttpClient) {}

  getProducts():  Observable<any>{//:Product[] {
     return this.http.get<any>(`${this.apiUrl}/products`);
  }

  // getCart(): ProductWithQty[] {

  // }

  addToCart(p:Product): void{

  }
}
