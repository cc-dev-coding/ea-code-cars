import { CarsPage } from './app.po';

describe('cars App', () => {
  let page: CarsPage;

  beforeEach(() => {
    page = new CarsPage();
  });

  it('should display header message', () => {
    page.navigateTo();
    expect(page.getHeading()).toEqual('Energy Australia Coding Test');
  });

  it('should display subheader message', () => {
    page.navigateTo();
    expect(page.getSubHeading()).toEqual('Cars participation in car shows');
  });

});
