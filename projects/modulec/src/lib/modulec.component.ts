import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-modulec',
  template: `
    <button type="button" class="btn btn-primary" (click)="basic = true">Open</button>

    <clr-modal [(clrModalOpen)]="basic">
    <h3 class="modal-title">I have a nice title</h3>
    <div class="modal-body">
        <p>But not much to say...</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline" (click)="basic = false">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="basic = false">Ok</button>
    </div>
  </clr-modal>
  `,
  styles: []
})
export class ModulecComponent implements OnInit {
  basic: boolean = false;
  constructor() { }

  ngOnInit() {
    this.basic = true;
  }

}
