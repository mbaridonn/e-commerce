import { Component, OnInit } from '@angular/core';

import { IProduct } from 'src/model/iproduct';
import { ProductsService } from 'src/services/products-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  errorMessage: String;

  constructor(private productService:ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {this.products = products},
      error => this.errorMessage = <any>error
    );
  }

}
