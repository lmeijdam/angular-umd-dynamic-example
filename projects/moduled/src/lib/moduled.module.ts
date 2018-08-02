import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuledComponent } from './moduled.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';
import { ComponentcComponent } from './componentc/componentc.component';

@NgModule({
  imports: [

    RouterModule.forChild([
      {
          path: '', component: ModuledComponent, children: [
            {
              path: '', redirectTo: 'a'
            },
            {
              path: 'a', component: ComponentaComponent
            },
            {
              path: 'b', component: ComponentbComponent
            },
            {
              path: 'c', component: ComponentcComponent
            }
          ]
      }
    ])
  ],
  declarations: [ModuledComponent, ComponentaComponent, ComponentbComponent, ComponentcComponent],
  exports: [ModuledComponent]
})
export class ModuledModule { }
