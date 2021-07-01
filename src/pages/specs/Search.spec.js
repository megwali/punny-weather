import { create } from 'react-test-renderer';
import Search from '../Search';

jest.mock('../../components/Dashboard', () => 'Dashboard');
jest.mock('../../components/styledComponents', () => ({
  Button: 'Button',
  SearchContainer: 'SearchContainer',
  SearchInput: 'SearchInput'
}));


describe('Search', () => {
  it ('renders', () => {
    const data = {};
    const component = create(<Search data={data} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
