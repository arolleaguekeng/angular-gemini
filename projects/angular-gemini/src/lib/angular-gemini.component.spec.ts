import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGeminiComponent } from './angular-gemini.component';

describe('AngularGeminiComponent', () => {
  let component: AngularGeminiComponent;
  let fixture: ComponentFixture<AngularGeminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularGeminiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularGeminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
