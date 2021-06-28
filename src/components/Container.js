import { Route, Switch } from 'react-router-dom';
import { Dashboard, Details } from '../pages';


const Container = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>

    <Route path="/:id">
      <Details />
    </Route>
  </Switch>
);

export default Container;
