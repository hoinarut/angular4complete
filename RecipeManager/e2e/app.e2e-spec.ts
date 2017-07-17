import { RecipeManagerPage } from './app.po';

describe('recipe-manager App', () => {
  let page: RecipeManagerPage;

  beforeEach(() => {
    page = new RecipeManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
