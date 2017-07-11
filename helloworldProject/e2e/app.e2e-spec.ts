import { HelloworldProjectPage } from './app.po';

describe('helloworld-project App', () => {
  let page: HelloworldProjectPage;

  beforeEach(() => {
    page = new HelloworldProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
