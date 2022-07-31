import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, take} from 'rxjs/operators';
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
  onSearchStringChanged(inputChanged: Observable<string>): void{
    inputChanged.pipe(
      take(4),
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe( _ => this.products$ = this.productService.getProducts());

  }

}
