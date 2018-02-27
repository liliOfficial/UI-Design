import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldNewComponent } from './field-new.component';

describe('FieldNewComponent', () => {
  let component: FieldNewComponent;
  let fixture: ComponentFixture<FieldNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
