import { TestBed, inject } from '@angular/core/testing';

import { MeasuringComponentService } from './measuring-component.service';

describe('MeasuringComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeasuringComponentService]
    });
  });

  it('should be created', inject([MeasuringComponentService], (service: MeasuringComponentService) => {
    expect(service).toBeTruthy();
  }));
});
