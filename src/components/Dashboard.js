import moment from 'moment';
import { useLocation } from 'react-router-dom';
import WeatherIcon from './WeatherIcon';
import {
  CardList,
  CardText,
  CenteredTextContainer,
  ColWrapper,
  Error,
  RowWrapper,
  WeatherCard
} from './styledComponents';

const Dashboard = ({ data, loadingMessage }) => {
  const { pathname } = useLocation();
  const parentPath = pathname.split('/')[1];
  const { city, error, loading, summary } = data;

  return (
    <CenteredTextContainer>
      {city && <h3>Your weather forecast deck for {city.name}, {city.country}</h3>}
      {error && <Error>{error === true ? 'An error occurred' : error}</Error>}
      {loading && loadingMessage}

      {(loading || !!summary?.length) && (
        <CardList>
          {summary.map(({ date, temp_max, temp_min, weatherCondition, weatherIcon }, index) => (
            <WeatherCard key={date} to={`/${parentPath}/${index + 1}`}>
              <RowWrapper>
                <div>
                  <CardText as="h3">{moment(date).format('ddd')}</CardText>
                  <CardText>{moment(date).format('MMMM DD')}</CardText>
                </div>

                <CardText as="div">
                  <CardText as="h3">{temp_max}℃</CardText>
                  <CardText as="h5">{temp_min}℃</CardText>
                </CardText>
              </RowWrapper>

              <ColWrapper>
                <WeatherIcon icon={weatherIcon} weatherCondition={weatherCondition} />
                Mostly {weatherCondition}
                <CardText as="sub">Click for details</CardText>
              </ColWrapper>
            </WeatherCard>
          ))}
        </CardList>
      )}
    </CenteredTextContainer>
  );
};

export default Dashboard;
