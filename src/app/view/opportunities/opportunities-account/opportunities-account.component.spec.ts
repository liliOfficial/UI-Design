import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesAccountComponent } from './opportunities-account.component';

describe('OpportunitiesAccountComponent', () => {
  let component: OpportunitiesAccountComponent;
  let fixture: ComponentFixture<OpportunitiesAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
