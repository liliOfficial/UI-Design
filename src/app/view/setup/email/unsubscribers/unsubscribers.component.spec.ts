import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribersComponent } from './unsubscribers.component';

describe('UnsubscribersComponent', () => {
  let component: UnsubscribersComponent;
  let fixture: ComponentFixture<UnsubscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
