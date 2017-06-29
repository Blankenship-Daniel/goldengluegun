import { GggPage } from './app.po';

describe('ggg App', () => {
  let page: GggPage;

  beforeEach(() => {
    page = new GggPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
