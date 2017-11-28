import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import ErrorBoundary from '../../ErrorBoundary';

const MainNav = props => (
  <ErrorBoundary>
    <nav className="main-nav">
      <div className="container">
        <Link to="/" className="logo">Anja Keks</Link>
        <ul>
          {props.links.map(link => (
            <li key={link.id}>
              <NavLink exact to={link.url} activeClassName="active">{link.text}</NavLink>
            </li>
          ))}
        </ul>
        {props.children}
      </div>
    </nav>
  </ErrorBoundary>
  );

MainNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainNav;
