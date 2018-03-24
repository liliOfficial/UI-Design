import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmailTemplateComponent } from './my-email-template.component';

describe('MyEmailTemplateComponent', () => {
  let component: MyEmailTemplateComponent;
  let fixture: ComponentFixture<MyEmailTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEmailTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
