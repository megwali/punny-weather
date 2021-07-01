import moment from 'moment';
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
  const { city, error, loading, summary } = data;

  return (
    <CenteredTextContainer>
      {city && <h3>Your weather forecast deck for {city.name}, {city.country}</h3>}
      {error && <Error>{error === true ? 'An error occurred' : error}</Error>}
      {loading && loadingMessage}

      {(loading || !!summary?.length) && (
        <CardList>
          {summary.map(({ date, temp_max, temp_min, weatherCondition, weatherIcon }) => (
            <WeatherCard key={date}>
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
                <img
                  alt={`${weatherCondition}-weather-icon`}
                  height="120"
                  src={`${process.env.REACT_APP_ICON_URL}${weatherIcon}@2x.png`}
                  width="120"
                />
                Mostly {weatherCondition}
                <CardText as="sub">Click for details</CardText>
              </ColWrapper>
            </WeatherCard>
          ))}
        </CardList>
      )}
    </CenteredTextContainer>
  )
};

export default Dashboard;
