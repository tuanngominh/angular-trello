import { Angular101Page } from './app.po';

describe('angular101 App', () => {
  let page: Angular101Page;

  beforeEach(() => {
    page = new Angular101Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
