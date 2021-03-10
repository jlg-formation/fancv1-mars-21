import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ArticleHttpService } from './article-http.service';

describe('ArticleHttpService', () => {
  let service: ArticleHttpService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ArticleHttpService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    // simulate http return 200 OK
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toBe('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  it('should refresh with error', () => {
    // simulate http return 404 Not found
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toBe('GET');
    req.flush(null, { status: 404, statusText: 'Not Found ' });
    expect(service).toBeTruthy();
  });

  it('should test add in error', () => {
    // simulate http return 404 Not found
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toBe('GET');
    req.flush(null, { status: 404, statusText: 'Not Found ' });

    service.add({ name: 'toto', price: 1, qty: 1 });

    const req2 = http.expectOne('/api/articles');
    expect(req2.request.method).toBe('POST');
    req2.flush(null, { status: 404, statusText: 'Not Found ' });

    expect(service).toBeTruthy();
  });

  it('should test add in success', () => {
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toBe('GET');
    req.flush(null, { status: 404, statusText: 'Not Found ' });

    service.add({ name: 'toto', price: 1, qty: 1 });

    const req2 = http.expectOne('/api/articles');
    expect(req2.request.method).toBe('POST');
    req2.flush('');

    const req3 = http.expectOne('/api/articles');
    expect(req3.request.method).toBe('GET');
    req3.flush([]);

    expect(service).toBeTruthy();
  });
});
