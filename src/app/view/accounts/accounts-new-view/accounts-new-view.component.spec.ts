import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsNewViewComponent } from './accounts-new-view.component';

describe('AccountsNewViewComponent', () => {
  let component: AccountsNewViewComponent;
  let fixture: ComponentFixture<AccountsNewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsNewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
