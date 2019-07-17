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
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
   }

   addOrder(customerData) {
    let items_ids = [];
    let i;

    for (i=0; i<this.items.length; i++) {
        items_ids.push(this.items[i]._id);
    }

    this.os.addOrder(customerData.name, customerData.credit_number, customerData.phone, customerData.address, items_ids);
  }


  ngOnInit() {
  }

}
