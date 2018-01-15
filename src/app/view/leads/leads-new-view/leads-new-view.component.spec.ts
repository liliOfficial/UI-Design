import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsNewViewComponent } from './leads-new-view.component';

describe('LeadsNewViewComponent', () => {
  let component: LeadsNewViewComponent;
  let fixture: ComponentFixture<LeadsNewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsNewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
