import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: JSON;
  constructor(private cartService: CartService, private productsService: ProductsService ) {
    
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product is available');
  }

  ngOnInit(){
    this.productsService.getProducts()
    .subscribe((data: JSON) => {
      this.products = data;
    });
  }

  
}

