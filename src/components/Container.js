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
  const id = pathname.split('/')[2];
  const index = id - 1;

  useEffect(() => {
    setSkip(!pathname.includes('/locate') || locationForecast?.summary?.length)
  }, [locationForecast?.summary, pathname])

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
        <Details data={locationForecast?.list[index]} />
      </Route>

      <Route path="/search/:id">
        <Details data={searchForecast?.list[index]} />
      </Route>
    </Switch>
  );
};

export default Container;
