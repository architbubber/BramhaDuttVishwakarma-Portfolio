import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsEditorComponent } from './publications-editor.component';

describe('PublicationsEditorComponent', () => {
  let component: PublicationsEditorComponent;
  let fixture: ComponentFixture<PublicationsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
