import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-moduleb',
  template: `
  <clr-tabs>
    <clr-tab>
        <button clrTabLink id="link1">Tab1</button>
        <clr-tab-content id="content1" *clrIfActive>
        <div class="row">
    <div class="col-lg-5 col-md-8 col-sm-12 col-xs-12">
        <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-block">
                <div class="card-title">
                    Block
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Footer Action 1</button>
                <button class="btn btn-sm btn-link">Footer Action 2</button>
            </div>
        </div>
    </div>
</div>
        </clr-tab-content>
    </clr-tab>
    <clr-tab>
        <button clrTabLink>Tab2</button>
        <clr-tab-content *clrIfActive="true">
        <table class="table">
    <thead>
        <tr>
            <th class="left">Wizard</th>
            <th>Allegiance</th>
            <th>Triwizard Champion?</th>
            <th>Can Cast Fireball</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">Harry</td>
            <td>Gryffindor</td>
            <td>Yes</td>
            <td>No</td>
        </tr>
        <tr>
            <td class="left">Gandalf</td>
            <td>Hobbits</td>
            <td>Maybe?</td>
            <td>I don&apos;t think so...</td>
        </tr>
        <tr>
            <td class="left">Obi-Wan Kenobi</td>
            <td>Republic/Rebellion</td>
            <td>No</td>
            <td>No</td>
        </tr>
        <tr>
            <td class="left">Merlin</td>
            <td>King Arthur</td>
            <td>Probably invented the tournament</td>
            <td>Solid maybe</td>
        </tr>
    </tbody>
</table>
        </clr-tab-content>
    </clr-tab>
</clr-tabs>
  `,
  styles: []
})
export class ModulebComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
