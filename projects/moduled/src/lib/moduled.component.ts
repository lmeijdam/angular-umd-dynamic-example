import { Router } from '@angular/router';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'lib-moduled',
  template: `
    <div class="btn-group btn-primary">
      <button class="btn" (click)="navigate('a')">Component A</button>
      <button class="btn" (click)="navigate('b')">Component B</button>
      <button class="btn" (click)="navigate('c')">Component C</button>
  </div>
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class ModuledComponent implements OnInit {

  constructor(private router: Router, private injector: Injector) { }

  ngOnInit() {
    console.log(this.injector);
  }

  navigate(path: string) {
    this.router.navigate([`moduled/${path}`]);
  }
}
