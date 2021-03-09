import { Injectable } from '@angular/core';
import { Article } from './interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {}

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        { name: 'Tournevis', price: 2.34, qty: 120 },
        { name: 'Tournevis Cruciforme', price: 3.45, qty: 100 },
        { name: 'Marteau', price: 5.1, qty: 200 },
        { name: 'Tondeuse à gazon', price: 200, qty: 8 },
        { name: 'Pince', price: 5, qty: 100 },
      ];
    }
    return JSON.parse(str) as Article[];
  }

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(article: Article): void {
    this.articles.push(article);
    this.save();
  }
}
