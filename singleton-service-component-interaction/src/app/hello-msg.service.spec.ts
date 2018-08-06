import { TestBed, inject } from '@angular/core/testing';

import { HelloMsgService } from './hello-msg.service';

describe('HelloMsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloMsgService]
    });
  });

  it('should be created', inject([HelloMsgService], (service: HelloMsgService) => {
    expect(service).toBeTruthy();
  }));
});
