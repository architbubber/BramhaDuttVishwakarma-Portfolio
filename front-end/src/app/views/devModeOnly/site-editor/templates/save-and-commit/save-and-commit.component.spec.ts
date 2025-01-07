import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAndCommitComponent } from './save-and-commit.component';

describe('SaveAndCommitComponent', () => {
  let component: SaveAndCommitComponent;
  let fixture: ComponentFixture<SaveAndCommitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveAndCommitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveAndCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
