import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import { Product } from "./Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products : Product[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
getProducts(){
  this.productService.getProducts().subscribe(data =>{
    this.products = data;
  })
}
}