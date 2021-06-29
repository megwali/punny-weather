import { Link } from 'react-router-dom';
import { CenteredTextContainer, LinkedCard, LinkedCardContainer } from './styledComponents';

const Home = () => (
  <CenteredTextContainer>
    <h2>Welcome to the punny weather forecast service</h2>
    <h3>How would you like your weather served?</h3>

    <LinkedCardContainer>
      <LinkedCard to="/locate">
        <h3>Magic</h3>
        <p>View weather information about your current location:</p>
        <p>Click here and we'll handle the magic of presenting the weather forecast for your location.</p>
        <Link to="/locate">Get my location</Link>
      </LinkedCard>

      <LinkedCard to="/search">
        <h3>Science</h3>
        <p>Search weather forecast information for any city:</p>
        <p>Click here to be transported to the search portal to find forecast locations and information yourself.</p>
        <Link to="/search">Take me to the search portal</Link>
      </LinkedCard>
    </LinkedCardContainer>
  </CenteredTextContainer>
);

export default Home;
