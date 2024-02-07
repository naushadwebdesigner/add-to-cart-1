import { Routes } from '@angular/router';
import { ProductsComponent } from './comp/products/products.component';
import { CartComponent } from './comp/cart/cart.component';


export const routes: Routes = [

    { path: "", component:ProductsComponent },
    { path: "cart", component:CartComponent },
    
    
];
