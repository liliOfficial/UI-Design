import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsFieldsComponent } from './leads-fields.component';

describe('LeadsFieldsComponent', () => {
  let component: LeadsFieldsComponent;
  let fixture: ComponentFixture<LeadsFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
