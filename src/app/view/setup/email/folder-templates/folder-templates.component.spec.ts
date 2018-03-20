import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTemplatesComponent } from './folder-templates.component';

describe('FolderTemplatesComponent', () => {
  let component: FolderTemplatesComponent;
  let fixture: ComponentFixture<FolderTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
