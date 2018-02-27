import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldValueEditComponent } from './field-value-edit.component';

describe('FieldValueEditComponent', () => {
  let component: FieldValueEditComponent;
  let fixture: ComponentFixture<FieldValueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldValueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldValueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
