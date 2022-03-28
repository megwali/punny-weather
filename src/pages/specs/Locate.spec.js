import { create } from 'react-test-renderer';
import Locate from '../Locate';

jest.mock('../../components/Dashboard', () => 'Dashboard');


describe('Locate', () => {
  it ('renders', () => {
    const component = create(<Locate data={{}} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
