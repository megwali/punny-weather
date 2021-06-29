import { NavLink, useLocation } from 'react-router-dom';
import { MenuContainer } from './styledComponents';


const Menu = () => {
const { pathname } = useLocation();
  return (
    <MenuContainer>
      <NavLink activeStyle={{ color: 'navy' }} exact to="/">Home</NavLink>
      <NavLink activeStyle={{ color: 'navy' }} isActive={(match) => match} to="/search">Search</NavLink>

      {pathname === '/locate' && (
        <NavLink activeStyle={{ color: 'navy' }} isActive={(match) => match} to="/locate">My forecast</NavLink>
      )}
    </MenuContainer>
  );
};


export default Menu;
