import { Route } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterService } from './services/router.service';

declare var SystemJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  existingRoutes$: Observable<Route[]>;

  title = 'app';
  constructor(private routerService: RouterService) {
    this.existingRoutes$ = this.routerService.existingRoutes;
  }
}
