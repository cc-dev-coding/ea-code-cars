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


  it('should display first make of cars', () => {
    page.navigateTo();
    expect(page.getFirstMake()).toEqual('make1');
  });

  it('should display first model of cars', () => {
    page.navigateTo();
    expect(page.getFirstModel()).toEqual('model1');
  });
  
  it('should display first show', () => {
    page.navigateTo();
    expect(page.getFirstShow()).toEqual('show1');
  });


});
