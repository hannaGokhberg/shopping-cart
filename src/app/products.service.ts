import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products;

  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.uri}`);
  }

  getProductById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }
}