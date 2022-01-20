import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { AboutComponent } from './about/about.component';
// import { ProductsComponent } from './products/products.component';
// import { HomeComponent } from './home/homecomponent';
// import { CartComponent } from './cart/cart.component';
// import { SideBarComponent } from './sidebar/sidebar.component';

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
]

export const routes: ModuleWithProviders<any> = RouterModule.forRoot(router) //we are registering the array called router to the root of our application in order to make it availabel everywhere.
