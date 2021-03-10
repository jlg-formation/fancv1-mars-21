import { Injectable } from '@angular/core';
import { Article } from './interfaces/article';

const ARTICLE = 'articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {}

  getArticles(): Article[] {
    const str = localStorage.getItem(ARTICLE);
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  save(): void {
    localStorage.setItem(ARTICLE, JSON.stringify(this.articles));
  }

  add(article: Article): void {
    this.articles.push(article);
    this.save();
  }

  remove(articles: Article[]): void {
    this.articles = this.articles.filter((a) => !articles.includes(a));
    this.save();
  }
}
