import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLineComponent } from './select-line.component';

describe('SelectLineComponent', () => {
  let component: SelectLineComponent;
  let fixture: ComponentFixture<SelectLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
