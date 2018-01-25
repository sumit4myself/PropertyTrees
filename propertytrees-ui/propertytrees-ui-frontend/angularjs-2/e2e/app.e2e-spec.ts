import { PropFrontV1Page } from './app.po';

describe('prop-front-v1 App', function() {
  let page: PropFrontV1Page;

  beforeEach(() => {
    page = new PropFrontV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
