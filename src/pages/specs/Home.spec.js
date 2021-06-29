import { create } from 'react-test-renderer';
import Home from '../Home';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));
jest.mock('../StyledComponents', () => ({
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
