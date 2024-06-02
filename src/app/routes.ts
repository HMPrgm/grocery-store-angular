import { Routes } from "@angular/router";
import { StorebodyComponent } from "./store/storebody/storebody.component";
import { ProductbodyComponent } from "./product/productbody/productbody.component";
import { HomebodyComponent } from "./home/homebody/homebody.component";

const routeConfig: Routes = [
    {
        path:'store',
        component: StorebodyComponent,
        title: "Store"
    },
    {
        path:'product/:id',
        component: ProductbodyComponent,
        title: "Product"
    },
    {
        path:'',
        component: HomebodyComponent,
        title: "Groceries Online"
    }
];

export default routeConfig;