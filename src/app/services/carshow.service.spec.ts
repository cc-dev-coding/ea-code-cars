import { TestBed, inject } from '@angular/core/testing';

import { CarshowService } from './carshow.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CarshowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarshowService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([CarshowService], (service: CarshowService) => {
    expect(service).toBeTruthy();
  }));
});
