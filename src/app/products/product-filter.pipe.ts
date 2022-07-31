import { Pipe, PipeTransform } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], searchString: string): unknown {
    const filteredProducts: Product[] = [];
    if (searchString === 'undefiend' || searchString === 'null' || searchString === '') { return products; }

    from(products)
    .pipe(
       filter((product: Product) =>
            // tslint:disable-next-line: no-unused-expression
            product.name.toLowerCase().includes(searchString.toLowerCase()) ||
            product.description.toLowerCase().includes(searchString.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchString.toLowerCase())
       )
    )
    .subscribe((product: Product) => {
      filteredProducts.push(product);
    });
    return filteredProducts;
  }

}
