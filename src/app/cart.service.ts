import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  //total = 0;

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
