import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/daisy">Daisy</NavLink>
        </li>
        <li>
          <NavLink to="/cactus">Cactus</NavLink>
        </li>
        <li>
          <NavLink to="/roses">Roses</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;