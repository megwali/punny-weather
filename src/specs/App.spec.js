import { create } from 'react-test-renderer';
import App from '../App';

jest.mock('../components/Container', () => 'Container');
jest.mock('../components/Header', () => 'Header');
jest.mock('../components/Menu', () => 'Menu');


describe('App', () => {
  it('renders', () => {
    const component = create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
