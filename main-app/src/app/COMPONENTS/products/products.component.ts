import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../SERVICES/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products: any[] = [];

  constructor(private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {}
  addToCart(p: any) {
    this.shoppingCart.addProduct(p)
  }
}
