import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, take, switchMap} from 'rxjs/operators';
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
  searchControl: FormControl = new FormControl();
  brands: string[] = [];
  products: Product[] = [];
  products$: Observable<Product[]>;

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.searchControl.valueChanges
    .pipe(
      debounceTime(1000),
      take(4),
      distinctUntilChanged(),
      switchMap(() => this.productService.getProducts())
    );
  }
}
