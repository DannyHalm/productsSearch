import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from './products-test.service';
import {Observable} from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'products-table',
  templateUrl: 'products-grid.component.html',
  styleUrls: [],
  providers: []
})
export class ProductsGridComponent implements OnInit{

    products$!: Observable<Product[]>;

    constructor(private productService: ProductsService){
    }
  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
}

}
