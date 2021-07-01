import { create } from 'react-test-renderer';
import Locate from '../Locate';

jest.mock('../../components/Dashboard', () => 'Dashboard');


describe('Locate', () => {
  it ('renders', () => {
    const data = {};
    const component = create(<Locate data={data} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
