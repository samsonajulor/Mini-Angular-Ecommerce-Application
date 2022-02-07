import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { routes } from './app.router'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@Angular/material/card'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeComponent } from './PAGES/home/home.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { LoginComponent } from './PAGES/login/login.component';
import { BannerComponent } from './COMPONENTS/banner/banner.component';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { CheckoutSubtotalComponent } from './COMPONENTS/checkout-subtotal/checkout-subtotal.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routes,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
