import { TestAsgComposentPage } from './app.po';

describe('test-asg-composent App', function() {
  let page: TestAsgComposentPage;

  beforeEach(() => {
    page = new TestAsgComposentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
