import { browser, logging } from 'protractor';
import { AddPage } from './po/add.po';
import { AppPage } from './po/app.po';
import { StockPage } from './po/stock.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let stockPage: StockPage;
  let addPage: AddPage;

  beforeEach(() => {
    page = new AppPage();
    stockPage = new StockPage();
    addPage = new AddPage();
  });

  it('should add an article', async () => {
    await page.navigateTo();
    await page.clickOnCheckStockBtn();
    await stockPage.clickOnAddBtn();
    await addPage.fillForm({ name: 'TestE2E', price: 1.23, qty: 34 });
    await addPage.submitForm();
    const article = await stockPage.getLastArticle();
    expect(article.name).toEqual('TestE2E');
    expect(article.price).toEqual(1.23);
    expect(article.qty).toEqual(34);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
