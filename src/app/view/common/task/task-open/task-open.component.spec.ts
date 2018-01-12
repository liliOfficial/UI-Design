import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOpenComponent } from './task-open.component';

describe('TaskOpenComponent', () => {
  let component: TaskOpenComponent;
  let fixture: ComponentFixture<TaskOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
