import { renderComponent, expect } from '../../clientTester';
import Home from '../../../client/components/Home';

describe('Home', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('have welcome message', () => {
    expect(component).to.contain('Welcome to Adapt academy ;)');
  });

  it('have list', () => {
    expect(component.find('ul')).to.exist;
  });
});
