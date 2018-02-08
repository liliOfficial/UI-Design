import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDuplicationsComponent } from './find-duplications.component';

describe('FindDuplicationsComponent', () => {
  let component: FindDuplicationsComponent;
  let fixture: ComponentFixture<FindDuplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDuplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDuplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
