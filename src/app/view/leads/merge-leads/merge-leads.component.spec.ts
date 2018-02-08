import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeLeadsComponent } from './merge-leads.component';

describe('MergeLeadsComponent', () => {
  let component: MergeLeadsComponent;
  let fixture: ComponentFixture<MergeLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
