import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulecComponent } from './modulec.component';

describe('ModulecComponent', () => {
  let component: ModulecComponent;
  let fixture: ComponentFixture<ModulecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
