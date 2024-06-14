import { Component, inject } from '@angular/core';
import { ProductgroupComponent } from "../productgroup/productgroup.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-storebody',
    standalone: true,
    templateUrl: './storebody.component.html',
    imports: [ProductgroupComponent]
})
export class StorebodyComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  category:string = "Fruit"

  constructor(){
    this.category = this.route.snapshot.params['cat'];
  }
}
