import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsEditorComponent } from './blogs-editor.component';

describe('BlogsEditorComponent', () => {
  let component: BlogsEditorComponent;
  let fixture: ComponentFixture<BlogsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
