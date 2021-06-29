import useUserLocation from '../hooks/useUserLocation';
import { CardList, CenteredTextContainer, Error } from './styledComponents';


const Dashboard = () => {
  const { error, forecast, loading } = useUserLocation();

  return (
    <CardList>
      {error && <Error>An error occurred</Error>}
      {loading && <CenteredTextContainer>Doing magic... 🎩🕴</CenteredTextContainer>}
    </CardList>
  )
};

export default Dashboard;
