import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'


export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'checkout', redirectTo: 'checkout', pathMatch: 'full'},
  // {path: 'about', component: AboutComponent},
]

export const routes: ModuleWithProviders<any> = RouterModule.forRoot(router) //we are registering the array called router to the root of our application in order to make it availabel everywhere.
