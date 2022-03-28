
const WeatherIcon = ({ icon, weatherCondition}) => (
  <img
    alt={`${weatherCondition}-weather-icon`}
    height="120"
    src={`${process.env.REACT_APP_ICON_URL}${icon}@2x.png`}
    width="120"
  />
);

export default WeatherIcon;
