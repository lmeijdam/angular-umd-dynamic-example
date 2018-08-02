import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: LazyComponent
      }
    ])
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
