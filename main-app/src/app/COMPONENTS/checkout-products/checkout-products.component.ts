import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.scss'],
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any[] = [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(public shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    console.log('products ', this.checkout_products);
  }

  removeItem(p: any) {
    this.shoppingCartService.removeItem(p);
    this.deleteEvent.emit(p);
  }
}
