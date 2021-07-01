import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Locate, Details, Home, Search } from '../pages';
import { useSearchQuery, useUserLocation } from '../hooks';


const Container = () => {
  const [query, setQuery] = useState('');
  const { pathname } = useLocation();
  const [skip, setSkip] = useState(pathname !== '/locate');
  const locationForecast = useUserLocation(skip);
  const searchForecast = useSearchQuery(query);

  useEffect(() => {
    setSkip(pathname !== '/locate' || locationForecast?.summary?.length)
  }, [locationForecast?.summary, pathname])

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/locate">
        <Locate data={locationForecast} />
      </Route>

      <Route path="/search">
        <Search data={searchForecast} setQuery={setQuery} />
      </Route>

      <Route path="/:id">
        <Details />
      </Route>
    </Switch>
  );
};

export default Container;
