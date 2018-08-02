import { RouterModule } from '@angular/router';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModulebComponent } from './moduleb.component';

import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    ClarityModule,
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: ModulebComponent
      }
    ])
  ],
  declarations: [ModulebComponent],
  exports: [ModulebComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ModulebModule { }
