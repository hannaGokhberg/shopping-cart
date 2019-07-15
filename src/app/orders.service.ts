import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  uri = 'http://localhost:4000/orders';
  constructor(private http: HttpClient) { }

  addOrder(name, credit_number, phone, address) {
    const obj = {
      name: name,
      credit_number: credit_number,
      phone: phone, 
      address: address
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
