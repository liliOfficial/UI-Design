import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDuplicationsComponent } from './fund-duplications.component';

describe('FundDuplicationsComponent', () => {
  let component: FundDuplicationsComponent;
  let fixture: ComponentFixture<FundDuplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundDuplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDuplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
