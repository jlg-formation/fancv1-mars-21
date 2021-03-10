import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleHttpService extends ArticleService {
  constructor() {
    super();
    console.log('ArticleHttpService instantiated.');
  }
}
