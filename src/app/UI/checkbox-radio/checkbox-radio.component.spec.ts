import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRadioComponent } from './checkbox-radio.component';

describe('CheckboxRadioComponent', () => {
  let component: CheckboxRadioComponent;
  let fixture: ComponentFixture<CheckboxRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
