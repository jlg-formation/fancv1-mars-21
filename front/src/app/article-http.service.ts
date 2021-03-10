import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  remove(articles: Article[]): void {
    super.remove(articles);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(articles.map((a) => a.id)),
    };
    this.http
      .delete<void>('/api/articles', options)
      // tslint:disable-next-line: deprecation
      .subscribe({
        next: () => {
          console.log('article removed');
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
