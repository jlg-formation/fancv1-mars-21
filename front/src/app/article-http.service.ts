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
        next: (articles) => {
          console.log('articles: ', articles);
          this.articles = articles;
        },
        error: (error) => {
          console.log('error: ', error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  add(article: Article): void {
    super.add(article);
    this.http
      .post<void>('/api/articles', article)
      // tslint:disable-next-line: deprecation
      .subscribe({
        next: () => {
          console.log('article added');
          this.refresh();
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
