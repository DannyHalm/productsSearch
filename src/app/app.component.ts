import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductsService } from './products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ir-dev-test';

  searchString = '';
  brands: string[] = [];
  products: Product[] = [];
  products$: Observable<Product[]>;

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
  onSearchStringChanged(): void{
    this.products$ = this.productService.getProducts();
  }

}
