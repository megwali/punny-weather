import useSearchQuery from '../hooks/useSearchQuery';
import { CardList, CenteredTextContainer, Error } from './styledComponents';


const Search = () => {
  const { error, forecast, loading } = useSearchQuery();

  return (
    <CardList>
      {error && <Error>An error occurred</Error>}
      {loading && <CenteredTextContainer>Doing science... 🛫 🧪 🔬 🛬</CenteredTextContainer>}
    </CardList>
  )
};

export default Search;
