import { create } from 'react-test-renderer';
import Locate from '../Locate';


describe('Locate', () => {
  it ('renders', () => {
    const data = {};
    const component = create(<Locate data={data} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
