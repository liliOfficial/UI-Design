import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsPageLayoutComponent } from './leads-page-layout.component';

describe('LeadsPageLayoutComponent', () => {
  let component: LeadsPageLayoutComponent;
  let fixture: ComponentFixture<LeadsPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
