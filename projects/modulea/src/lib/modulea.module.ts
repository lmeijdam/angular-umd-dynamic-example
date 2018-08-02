import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleaComponent } from './modulea.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: ModuleaComponent
      }
    ])
  ],
  declarations: [ModuleaComponent],
  exports: [ModuleaComponent]
})
export class ModuleaModule { }
