import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('header span')).getText();
  }

  async clickOnCheckStockBtn(): Promise<void> {
    const button = element(by.cssContainingText('button', 'Voir le stock'));
    await button.click();
  }
}
