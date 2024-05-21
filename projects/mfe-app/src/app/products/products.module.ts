import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './container/products-list/products-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductsListComponent }]),
  ],
})
export class ProductsModule {}
