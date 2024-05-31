import { Component } from '@angular/core';
import { ProductgroupComponent } from "../productgroup/productgroup.component";

@Component({
    selector: 'app-store-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [ProductgroupComponent]
})
export class BodyComponent {
    category = "fruit"
}
