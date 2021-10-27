import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <ul className="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1 nav">
      <li className="nav-item">
        <h5 className="nav-link active title">
          The Cocktail
        </h5>
      </li>
      {links.map((link) => (
        <li className="nav-item mt-1 " key={link.id}>
          <h5>
            <NavLink to={link.path}>{link.text}</NavLink>
          </h5>
        </li>
      ))}

    </ul>
  );
};

export default Navbar;
