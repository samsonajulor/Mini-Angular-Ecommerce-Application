import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}

  shoppingCartItems: any[] = [];

  addProduct = (product: any) => {
    console.log(product);
    let items = this.getShoppingCartItems();
    if (items) {
      items.push(product)
      localStorage.setItem('shoppingCart', JSON.stringify(items))
    } else {
      this.shoppingCartItems.push(product);
      localStorage.setItem(
        'shoppingCart',
        JSON.stringify(this.shoppingCartItems)
      );
    }
  };

  getShoppingCartItems = () => {
    let items: any = localStorage.getItem('shoppingCart');
    return JSON.parse(items)
  };
  getCartLength = () => {
    let items = this.getShoppingCartItems();
    return items ? this.getShoppingCartItems().length : 0;
  };
  getTotal = () => {
    let items = this.getShoppingCartItems();
    return items?.reduce((acc: any, item: any) => acc + item.price, 0);
  };
  removeItem = (p: any) => {
    console.log('calling remover ', p);
    let items = this.getShoppingCartItems();

    const index = items.findIndex((item:any) => item.id == p.id);
    if (index >= 0) {
      console.log('hitting if');
      items.splice(index, 1);
      return localStorage.setItem('shoppingCart', JSON.stringify(items));
    }
  }
}
