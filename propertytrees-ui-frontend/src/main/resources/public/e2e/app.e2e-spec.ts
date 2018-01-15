import { PropFrontPage } from './app.po';

describe('prop-front App', function() {
  let page: PropFrontPage;

  beforeEach(() => {
    page = new PropFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
