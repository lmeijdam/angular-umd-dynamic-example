import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentcComponent } from './componentc.component';

describe('ComponentcComponent', () => {
  let component: ComponentcComponent;
  let fixture: ComponentFixture<ComponentcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
