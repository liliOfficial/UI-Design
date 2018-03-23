import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtCampaignComponent } from './eidt-campaign.component';

describe('EidtCampaignComponent', () => {
  let component: EidtCampaignComponent;
  let fixture: ComponentFixture<EidtCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EidtCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
