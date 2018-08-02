import { ModuleService } from './services/module.service';
import { RouterService } from './services/router.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'portal', pathMatch: 'full'
      },
      {
        path: 'portal', loadChildren: './portal/portal.module#PortalModule'
      }
    ], {useHash: true}),
    HttpModule
  ],
  providers: [RouterService, ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
