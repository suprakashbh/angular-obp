import { OpbUiAppPage } from './app.po';

describe('opb-ui-app App', () => {
  let page: OpbUiAppPage;

  beforeEach(() => {
    page = new OpbUiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
