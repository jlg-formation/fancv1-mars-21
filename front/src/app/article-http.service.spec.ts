import { TestBed } from '@angular/core/testing';

import { ArticleHttpService } from './article-http.service';

describe('ArticleHttpService', () => {
  let service: ArticleHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
