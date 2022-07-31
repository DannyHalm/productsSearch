import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'products-table',
  templateUrl: 'products-grid.component.html',
  styleUrls: [],
  providers: []
}) //
export class ProductsGridComponent {
    // tslint:disable-next-line: no-input-rename
    @Input('searchString') searchString: string;
    // tslint:disable-next-line: no-input-rename
    @Input('products$') products$: Observable<Product[]>;
}
