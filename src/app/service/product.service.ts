import { Injectable } from '@angular/core';
import { Product } from "../Product";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  api="https://5e7f2a4c7a92ed00165602d6.mockapi.io/product";
  constructor(
    private http : HttpClient
  ) { }
  getProducts():Observable<Product[]>{
return this.http.get<Product[]>(this.api);
}
  getProduct(id) : Observable<Product>{
    console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
    console.log(123)
  }
}