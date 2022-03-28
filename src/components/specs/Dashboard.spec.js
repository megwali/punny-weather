import { create } from 'react-test-renderer';
import Dashboard from '../Dashboard';

jest.mock('react-router-dom', () => ({ Link: 'Link', useLocation: () => ({ pathname: '/' }) }));


describe('Dashboard', () => {
  it ('renders', () => {
    const component = create(<Dashboard data={{}} loadingMessage={'loadingMessage'} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
