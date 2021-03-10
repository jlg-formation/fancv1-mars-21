import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleHttpService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('ArticleHttpService instantiated.');
  }
}
