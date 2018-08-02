import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuledComponent } from './moduled.component';

describe('ModuledComponent', () => {
  let component: ModuledComponent;
  let fixture: ComponentFixture<ModuledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
