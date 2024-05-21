import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunitiesComponent } from './container/opportunities/opportunities.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OpportunitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OpportunitiesComponent }]),
  ],
})
export class OpportunitiesModule {}
