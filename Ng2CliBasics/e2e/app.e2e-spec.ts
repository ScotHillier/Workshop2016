import { Ng2CliBasicsPage } from './app.po';

describe('ng2-cli-basics App', function() {
  let page: Ng2CliBasicsPage;

  beforeEach(() => {
    page = new Ng2CliBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
