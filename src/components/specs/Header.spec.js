import { create } from 'react-test-renderer';
import Header from '../Header';

jest.mock('react-router-dom', () => ({ Route: 'Route', Switch: 'Switch' }));


describe('Header', () => {
  it('renders', () => {
    const component = create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
