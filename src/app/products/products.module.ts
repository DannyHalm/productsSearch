import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsGridComponent } from './products-grid.component';
import { ProductsService } from './products-test.service';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  imports: [
     BrowserModule,
     FormsModule
  ],
  declarations: [
    ProductsGridComponent,
    ProductFilterPipe
  ],
  exports: [
    ProductsGridComponent
  ],
  providers: [
    ProductsService
  ]
})

export class ProductsModule { }
