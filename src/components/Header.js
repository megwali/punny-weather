import { Route, Switch } from 'react-router-dom';

const Header = () => (
  <Switch>
    <Route exact path="/">
      <h2>Home</h2>
    </Route>

    <Route path="/locate">
      <h2>My forecast</h2>
    </Route>

    <Route path="/search">
      <h2>Search</h2>
    </Route>

    <Route path="/:id">
      <h2>Details</h2>
    </Route>
  </Switch>
);

export default Header;
