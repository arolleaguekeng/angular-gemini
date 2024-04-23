import { TestBed } from '@angular/core/testing';

import { AngularGeminiService } from './angular-gemini.service';

describe('AngularGeminiService', () => {
  let service: AngularGeminiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularGeminiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
