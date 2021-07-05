import moment from 'moment';
import {
  CardList,
  CardText,
  CenteredTextContainer,
  ColWrapper,
  RowWrapper,
  WeatherCard
} from '../components/styledComponents';
import { sanitizeData } from '../utils';
import WeatherIcon from '../components/WeatherIcon';


const Details = ({ city, data }) => {
  const sanitizedData = data?.map(sanitizeData);

  return (
    <CenteredTextContainer>
      {city && (
        <>
          <h3>Your weather forecast deck for {city.name}, {city.country}.</h3>
          <CardText as="h3">{moment(data[0].dt * 1000).format('ddd, MMMM DD')}</CardText>
        </>
      )}

      {(!!data?.length) && (
        <CardList>
          {sanitizedData.map(({ main, rain, snow, time, weatherCondition, weatherDescription, weatherIcon, wind }) => (
            <WeatherCard as="div" key={time}>
              <CardText as="h3">{time}</CardText>
              <CardText>{weatherCondition}</CardText>

              <RowWrapper>
                <CardText as="div">
                  <CardText as="h3">Max: {main.temp_max}℃</CardText>
                  <CardText as="h4">Current: {main.temp}℃</CardText>
                  <CardText as="h5">Feels: {main.feels_like}℃</CardText>
                  <CardText as="h6">Min: {main.temp_min}℃</CardText>
                </CardText>
              </RowWrapper>

              <ColWrapper>
                <WeatherIcon icon={weatherIcon} weatherCondition={weatherCondition} />
                <CardText>{weatherDescription}</CardText>
              </ColWrapper>

              <RowWrapper>
                <CardText as="div">
                  <CardText as="h6">Humidity: {main.humidity}%</CardText>
                  <CardText as="h5">Pressure: {main.pressure}hPa</CardText>
                  <CardText as="h6">Wind speed: {wind.speed}m/s</CardText>
                  <CardText as="h6">Gust: {wind.gust}m/s</CardText>
                  {rain && <CardText as="h6">Rain: {rain}mm</CardText>}
                  {snow && <CardText as="h6">Snow: {snow}mm</CardText>}
                </CardText>
              </RowWrapper>
            </WeatherCard>
          ))}
        </CardList>
      )}
    </CenteredTextContainer>
  );
};

export default Details;
