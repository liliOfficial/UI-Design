import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionProfileComponent } from './permission-profile.component';

describe('PermissionProfileComponent', () => {
  let component: PermissionProfileComponent;
  let fixture: ComponentFixture<PermissionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
