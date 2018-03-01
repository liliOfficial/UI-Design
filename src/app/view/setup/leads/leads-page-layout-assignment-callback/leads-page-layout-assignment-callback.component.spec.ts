import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsPageLayoutAssignmentCallbackComponent } from './leads-page-layout-assignment-callback.component';

describe('LeadsPageLayoutAssignmentCallbackComponent', () => {
  let component: LeadsPageLayoutAssignmentCallbackComponent;
  let fixture: ComponentFixture<LeadsPageLayoutAssignmentCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsPageLayoutAssignmentCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsPageLayoutAssignmentCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
