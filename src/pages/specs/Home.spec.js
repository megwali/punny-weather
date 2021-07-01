import { create } from 'react-test-renderer';
import Home from '../Home';

jest.mock('../../components/styledComponents', () => ({
  CenteredTextContainer: 'CenteredTextContainer',
  LinkedCard: 'LinkedCard',
  LinkedCardContainer: 'LinkedCardContainer',
}));


describe('Home', () => {
  it('renders', () => {
    const component = create(<Home />);
    expect(component.toJSON()).toMatchSnapshot();
  });
})
