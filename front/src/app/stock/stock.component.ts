import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  selectedArticles: Set<Article> = new Set();
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(article: Article): void {
    console.log('article: ', article);
    if (this.selectedArticles.has(article)) {
      this.selectedArticles.delete(article);
      return;
    }
    this.selectedArticles.add(article);
  }

  remove(): void {
    console.log('remove');
    this.articleService.remove([...this.selectedArticles]);
    this.selectedArticles.clear();
  }
}
