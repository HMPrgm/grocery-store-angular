import { Component } from '@angular/core';
import { ProductgroupComponent } from "../productgroup/productgroup.component";

@Component({
    selector: 'app-storebody',
    standalone: true,
    templateUrl: './storebody.component.html',
    imports: [ProductgroupComponent]
})
export class StorebodyComponent {
  category = "Fruit"
}
