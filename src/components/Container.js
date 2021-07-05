import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Locate, Details, Home, Search } from '../pages';
import { useSearchQuery, useUserLocation } from '../hooks';


const Container = () => {
  const [query, setQuery] = useState('');
  const { pathname } = useLocation();
  const [skip, setSkip] = useState(pathname !== '/locate');
  const locationForecast = useUserLocation(skip);
  const searchForecast = useSearchQuery(query);
  const id = pathname.split('/')[2];
  const index = id < 1 ? 0 : id - 1;
  const locationIndex = id < locationForecast?.list?.length ? index : locationForecast?.list?.length - 1;

  useEffect(() => {
    setSkip(!pathname.includes('/locate') || locationForecast?.summary?.length);
  }, [locationForecast?.summary, pathname]);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/locate">
        <Locate data={locationForecast} />
      </Route>

      <Route exact path="/search">
        <Search data={searchForecast} query={query} setQuery={setQuery} />
      </Route>

      <Route path="/locate/:id">
        <Details city={locationForecast?.city} data={locationForecast?.list[locationIndex]} />
      </Route>

      <Route path="/search/:id">
        {query ? (
          <Details city={searchForecast?.city} data={searchForecast?.list[index]} />
        ) : (
          <Redirect to="/search" />
        )}
      </Route>

      <Route path="*">
        <Home />
      </Route>
    </Switch>
  );
};

export default Container;
