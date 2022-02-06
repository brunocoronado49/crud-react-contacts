import React from 'react';
import { Link } from 'wouter';
import './nav.css';

const Nav = () => {
  return <ul>
      <li>
          <Link to="/">Home</Link>
      </li>
      <li>
          <Link to="/contacts">Contacts</Link>
      </li>
      <li>
          <Link to="/create-contact">Create contact</Link>
      </li>
      <li className="about">
          <Link to="/about">About</Link>
      </li>
  </ul>;
};

export default Nav;