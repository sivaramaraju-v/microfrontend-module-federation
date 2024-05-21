import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from './products/products.module';
import { SitesModule } from './sites/sites.module';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'sites',
    loadChildren: () =>
      import('./sites/sites.module').then((m) => m.SitesModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'opportunities',
    loadChildren: () =>
      import('./opportunities/opportunities.module').then(
        (m) => m.OpportunitiesModule
      ),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sites',
  },
];
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,

    ProductsModule,
    SitesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
