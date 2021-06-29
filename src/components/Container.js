import { Route, Switch } from 'react-router-dom';
import { Dashboard, Details, Home, Search } from '../pages';


const Container = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/locate">
      <Dashboard />
    </Route>

    <Route path="/search">
      <Search />
    </Route>

    <Route path="/:id">
      <Details />
    </Route>
  </Switch>
);

export default Container;
