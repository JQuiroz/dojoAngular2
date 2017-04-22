import { DojoPracticePage } from './app.po';

describe('dojo-practice App', () => {
  let page: DojoPracticePage;

  beforeEach(() => {
    page = new DojoPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
