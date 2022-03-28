import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import Menu from './components/Menu';


const App = () => (
  <Router>
    <Header />
    <Menu />
    <Container />
  </Router>
);

export default App;
