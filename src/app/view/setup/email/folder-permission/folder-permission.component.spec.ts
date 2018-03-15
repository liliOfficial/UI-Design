import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderPermissionComponent } from './folder-permission.component';

describe('FolderPermissionComponent', () => {
  let component: FolderPermissionComponent;
  let fixture: ComponentFixture<FolderPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
