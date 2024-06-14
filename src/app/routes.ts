import { Routes } from "@angular/router";
import { StorebodyComponent } from "./store/storebody/storebody.component";
import { ProductbodyComponent } from "./product/productbody/productbody.component";
import { HomebodyComponent } from "./home/homebody/homebody.component";
import { CartbodyComponent } from "./shopcart/cartbody/cartbody.component";
import { StoreFrontBodyComponent } from "./storeFront/store-front-body/store-front-body.component";

const routeConfig: Routes = [
    {
        path:'store',
        component: StoreFrontBodyComponent,
        title: "Store"
    },
    {
        path:'store/:cat',
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
    },
    {
        path:'cart',
        component: CartbodyComponent,
        title: "Cart"
    }
];

export default routeConfig;