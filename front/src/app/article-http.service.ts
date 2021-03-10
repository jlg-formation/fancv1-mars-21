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
    this.refresh();
  }

  refresh(): void {
    this.http.get('http://localhost:3000/api/articles').subscribe({
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
