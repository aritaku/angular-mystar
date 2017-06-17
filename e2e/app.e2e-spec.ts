import { AngularMystarPage } from './app.po';

describe('angular-mystar App', () => {
  let page: AngularMystarPage;

  beforeEach(() => {
    page = new AngularMystarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
