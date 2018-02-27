import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsEditLayoutComponent } from './leads-edit-layout.component';

describe('LeadsEditLayoutComponent', () => {
  let component: LeadsEditLayoutComponent;
  let fixture: ComponentFixture<LeadsEditLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsEditLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsEditLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
