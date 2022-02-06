import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../SERVICES/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
