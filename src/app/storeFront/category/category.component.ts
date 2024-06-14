import { Component, Input } from '@angular/core';
import { Category } from '../../category';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  @Input() category!:Category


  getProperCase():string {
    return this.category.name[0].toUpperCase()+this.category.name.substring(1).toLowerCase()
  }
}
