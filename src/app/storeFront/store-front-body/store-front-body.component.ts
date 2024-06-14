import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CommonModule } from '@angular/common';
import { Category } from '../../category';

@Component({
  selector: 'app-store-front-body',
  standalone: true,
  imports: [CategoryComponent,CommonModule],
  templateUrl: './store-front-body.component.html'
})
export class StoreFrontBodyComponent {
    categories:Category[] = [
      {
        name:"fruit",
        photo:"https://cdn.pixabay.com/photo/2018/07/03/10/47/blueberries-3513547_640.jpg"
      },
      {
        name:"meat",
        photo:"https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_640.jpg"
      }
    ]
}
