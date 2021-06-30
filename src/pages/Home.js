import { CenteredTextContainer, LinkedCard, LinkedCardContainer } from './styledComponents';

const Home = () => (
  <CenteredTextContainer>
    <h2>Welcome to the punny weather forecast service</h2>
    <h3>How would you like your weather served?</h3>

    <LinkedCardContainer>
      <LinkedCard to="/locate">
        <h3>Misty Magic</h3>
        <p>View weather information about your current location:</p>
        <p>Pick this card and we'll handle the magic of presenting the weather forecast for your location.</p>
        <span>Get my location</span>
      </LinkedCard>

      <LinkedCard to="/search">
        <h3>Sunny Science</h3>
        <p>Search weather forecast information for any city:</p>
        <p>Click this card to be transported to the search portal to find forecast locations and information yourself.</p>
        <span>Take me to the search portal</span>
      </LinkedCard>
    </LinkedCardContainer>
  </CenteredTextContainer>
);

export default Home;
