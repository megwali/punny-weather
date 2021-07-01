import { NavLink, useLocation } from 'react-router-dom';
import { MenuContainer } from './styledComponents';


const Menu = () => {
const { pathname } = useLocation();
  return (
    <MenuContainer>
      <NavLink activeStyle={{ color: 'orangered' }} exact to="/">Home</NavLink>
      <NavLink activeStyle={{ color: 'orangered' }} isActive={(match) => match} to="/search">Search</NavLink>

      {pathname === '/locate' && (
        <NavLink activeStyle={{ color: 'orangered' }} isActive={(match) => match} to="/locate">Locate me</NavLink>
      )}
    </MenuContainer>
  );
};


export default Menu;
