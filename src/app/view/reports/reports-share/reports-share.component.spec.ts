import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsShareComponent } from './reports-share.component';

describe('ReportsShareComponent', () => {
  let component: ReportsShareComponent;
  let fixture: ComponentFixture<ReportsShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
