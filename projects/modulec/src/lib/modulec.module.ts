import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModulecComponent } from './modulec.component';

@NgModule({
  imports: [
    ClarityModule,
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: ModulecComponent
      }
    ])
  ],
  declarations: [ModulecComponent],
  exports: [ModulecComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ModulecModule { }
