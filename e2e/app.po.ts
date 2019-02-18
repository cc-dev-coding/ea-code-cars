import { browser, by, element } from 'protractor';

export class CarsPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeading() {
    return element(by.css('app-root h1')).getText();
  }

  getSubHeading() {
    return element(by.css('app-root h2')).getText();
  }

}
