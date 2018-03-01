import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsPageLayoutAssignmentComponent } from './leads-page-layout-assignment.component';

describe('LeadsPageLayoutAssignmentComponent', () => {
  let component: LeadsPageLayoutAssignmentComponent;
  let fixture: ComponentFixture<LeadsPageLayoutAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsPageLayoutAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsPageLayoutAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
