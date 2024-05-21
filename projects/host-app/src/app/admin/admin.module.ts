import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './container/admin-view/admin-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminViewComponent }]),
  ],
})
export class AdminModule {}
