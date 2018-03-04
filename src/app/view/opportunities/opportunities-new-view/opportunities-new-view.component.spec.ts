import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesNewViewComponent } from './opportunities-new-view.component';

describe('OpportunitiesNewViewComponent', () => {
  let component: OpportunitiesNewViewComponent;
  let fixture: ComponentFixture<OpportunitiesNewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesNewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
