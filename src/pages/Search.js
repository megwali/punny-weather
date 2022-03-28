import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import { Button, SearchContainer, SearchInput } from '../components/styledComponents';


const Search = ({ data, query = '', setQuery }) => {
  const [city, setCity] = useState(query);

  return (
    <>
      <SearchContainer>
        <SearchInput
          onChange={({ target }) => setCity(target.value)}
          placeholder="Search city"
          type="search"
          value={city}
        />
        <Button disabled={!city} onClick={() => setQuery(city)}>Search</Button>
      </SearchContainer>

      <Dashboard data={data} loadingMessage={'Doing science... 🛫 🧪 🔬 🛬'} />
    </>
  );
};

export default Search;
