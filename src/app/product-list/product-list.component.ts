import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Product } from "../Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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