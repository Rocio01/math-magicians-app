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
        <h4 className="nav-link title">
          MATH MAGICIANS
        </h4>
      </li>
      {links.map((link) => (
        <li className="nav-item " key={link.id}>
          <h4 className="nav-link">
            <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
          </h4>
        </li>
      ))}

    </ul>
  );
};

export default Navbar;
