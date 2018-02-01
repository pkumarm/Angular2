import { LoginProjectPage } from './app.po';

describe('login-project App', () => {
  let page: LoginProjectPage;

  beforeEach(() => {
    page = new LoginProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
