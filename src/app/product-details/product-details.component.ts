import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: JSON;

  constructor(private route: ActivatedRoute, private cartService: CartService, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productsService.getProductById(params.get('productId')).subscribe((data: JSON) => {
        this.product = data;
      });
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
