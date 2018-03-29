import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFolderEditComponent } from './file-folder-edit.component';

describe('FileFolderEditComponent', () => {
  let component: FileFolderEditComponent;
  let fixture: ComponentFixture<FileFolderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileFolderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFolderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
