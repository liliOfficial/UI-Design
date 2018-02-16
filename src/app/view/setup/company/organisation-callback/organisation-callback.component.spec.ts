import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationCallbackComponent } from './organisation-callback.component';

describe('OrganisationCallbackComponent', () => {
  let component: OrganisationCallbackComponent;
  let fixture: ComponentFixture<OrganisationCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
