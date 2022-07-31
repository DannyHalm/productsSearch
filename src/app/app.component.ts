import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ir-dev-test';

  searchString = '';

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
  }
  onSearchStringChanged(): void{
    this.productService.getProducts();
  }
}
