import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCallbackComponent } from './department-callback.component';

describe('DepartmentCallbackComponent', () => {
  let component: DepartmentCallbackComponent;
  let fixture: ComponentFixture<DepartmentCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
