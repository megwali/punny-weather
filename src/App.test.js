import { create } from 'react-test-renderer';
import App from './App';


describe('App', () => {
  it('renders', () => {
    const component = create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  })
});
