import { Article } from 'src/app/interfaces/article';
import { browser, by, element } from 'protractor';

export class StockPage {
  async clickOnAddBtn(): Promise<void> {
    const button = element(by.cssContainingText('button', 'Ajouter'));
    await button.click();
  }

  async getLastArticle(): Promise<Article> {
    const name = await element(by.css('tbody tr:last-child td.name')).getText();
    const priceStr = await element(
      by.css('tbody tr:last-child td.price')
    ).getText();
    const qtyStr = await element(
      by.css('tbody tr:last-child td.qty')
    ).getText();

    const article = {
      name: name,
      price: +priceStr.substring(0, priceStr.length - 2).replace(/,/, '.'),
      qty: +qtyStr,
    };

    return article;
  }
}
