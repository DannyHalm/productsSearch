import { Component, Input, OnInit } from '@angular/core';
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
    // tslint:disable-next-line: no-input-rename
    @Input('searchedText') searchedText = '';

    constructor(private productService: ProductsService){
    }
  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    console.log(this.searchedText);
  }

}
