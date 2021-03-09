import { Injectable } from '@angular/core';
import { Article } from './interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 2.34, qty: 120 },
    { name: 'Tournevis Cruciforme', price: 3.45, qty: 100 },
    { name: 'Marteau', price: 5.1, qty: 200 },
    { name: 'Tondeuse à gazon', price: 200, qty: 8 },
    { name: 'Pince', price: 5, qty: 100 },
  ];

  constructor() {}
}
