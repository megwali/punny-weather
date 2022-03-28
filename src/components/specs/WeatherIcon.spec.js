import { create } from 'react-test-renderer';
import WeatherIcon from '../WeatherIcon';

describe('WeatherIcon', () => {
  it ('renders', () => {
    const component = create(<WeatherIcon icon="test" weatherCondition="test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
