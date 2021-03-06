import { create } from 'react-test-renderer';
import Container from '../Container';

jest.mock('react-router-dom', () => ({ Redirect: 'Redirect', Route: 'Route', Switch: 'Switch', useLocation: () => ({ pathname: '/' }) }));
jest.mock('../../pages', () => ({ Locate: 'Locate', Details: 'Details', Home: 'Home', Search: 'Search' }));


describe('Container', () => {
  it('renders', () => {
    const component = create(<Container />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
