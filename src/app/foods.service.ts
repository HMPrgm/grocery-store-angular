import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  productList: Product[] = [
    {
        id: 1,
        name: "Apple",
        photo: "https://cdn-icons-png.freepik.com/512/123/123431.png",
        price: 1.49,
        category: "Fruit"
    },
    {
        id: 2,
        name: "Banana",
        photo: "https://cdn-icons-png.freepik.com/512/5779/5779223.png",
        price: 1.49,
        category: "Fruit"
    },
    {
        id: 3,
        name: "Blueberries",
        photo: "https://cdn-icons-png.flaticon.com/512/680/680942.png",
        price: 2.99,
        category: "Fruit"
    },
    {
        id: 4,
        name: "Grapes",
        photo: "https://cdn-icons-png.flaticon.com/512/2836/2836932.png",
        price: 2.99,
        category: "Fruit"
    },
    {
        id: 5,
        name: "Dragonfruit",
        photo: "https://cdn-icons-png.freepik.com/512/8645/8645298.png",
        price: 20.99,
        category: "Fruit"
    },
    {
        id: 6,
        name: "Blackberries",
        photo: "https://cdn-icons-png.flaticon.com/512/3341/3341710.png",
        price: 2.49,
        category: "Fruit"
    },
    {
        id: 7,
        name: "Strawberries",
        photo: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
        price: 3.49,
        category: "Fruit"
    },
    {
        id: 8,
        name: "Orange",
        photo: "https://cdn-icons-png.flaticon.com/512/721/721098.png",
        price: 1.49,
        category: "Fruit"
    }
]
  getAllFoods(): Product[] {
    return this.productList;
  }
  getFoodById(id: number): Product | undefined {
    return this.productList.find((housingLocation) => housingLocation.id === id);
  }
}
