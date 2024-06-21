import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StorebodyComponent } from './store/storebody/storebody.component';
import { ProductgroupComponent } from "./store/productgroup/productgroup.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, RouterModule, HeaderComponent, StorebodyComponent, ProductgroupComponent, FooterComponent]
})
export class AppComponent {

}
