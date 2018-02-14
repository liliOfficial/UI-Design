import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupNavComponent } from './setup-nav.component';

describe('SetupNavComponent', () => {
  let component: SetupNavComponent;
  let fixture: ComponentFixture<SetupNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
