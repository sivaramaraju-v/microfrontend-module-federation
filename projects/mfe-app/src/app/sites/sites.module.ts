import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesListComponent } from './container/sites-list/sites-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SitesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SitesListComponent }]),
  ],
})
export class SitesModule {}
