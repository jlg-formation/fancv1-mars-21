import { Article } from 'src/app/interfaces/article';
import { browser, by, element } from 'protractor';

export class AddPage {
  async fillForm(article: Article): Promise<void> {
    for (let key of Object.keys(article)) {
      const input = element(by.css(`input[ng-reflect-name="${key}"]`));
      await input.clear();
      await input.sendKeys(article[key as keyof Article] as string);
    }
  }

  async submitForm(): Promise<void> {
    const button = element(by.cssContainingText('button', 'Ajouter'));
    await button.click();
  }
}
