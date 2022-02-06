import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];

  constructor(public shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart() {
    this.items = this.shoppingCart.getShoppingCartItems();
  }

  deleteEventHandler(p: any) {
    console.log('event handled');
    this.getShoppingCart();
  }
}
