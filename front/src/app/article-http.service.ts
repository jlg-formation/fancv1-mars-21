import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArticleService } from './article.service';
import { Article } from './interfaces/article';
import { PartialObserver } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleHttpService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('ArticleHttpService instantiated.');
    this.refresh();
  }

  refresh(): void {
    this.http
      .get<Article[]>('/api/articles')
      // tslint:disable-next-line: deprecation
      .subscribe({
        next: (data) => {
          console.log('data: ', data);
        },
        error: (error) => {
          console.log('error: ', error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
