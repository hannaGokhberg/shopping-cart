import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private os: OrdersService
    ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      credit_number: '',
      phone: '',
      address: ''});
   }

   onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
   }

   addOrder(name, credit_number, phone, address) {
    this.os.addOrder(name, credit_number, phone, address);
  }


  ngOnInit() {
  }

}
