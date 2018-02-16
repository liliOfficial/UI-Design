import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationalChartComponent } from './organisational-chart.component';

describe('OrganisationalChartComponent', () => {
  let component: OrganisationalChartComponent;
  let fixture: ComponentFixture<OrganisationalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
