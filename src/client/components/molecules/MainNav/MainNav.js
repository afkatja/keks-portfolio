import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ErrorBoundary from '../../ErrorBoundary';

const MainNav = props => (
  <ErrorBoundary>
    <nav>
      Logo
      <ul>
        {props.links.map(link => (
          <li key={link.id}>
            <NavLink exact to={link.url} activeClassName="active">{link.text}</NavLink>
          </li>
        ))}
      </ul>
      {props.children}
    </nav>
  </ErrorBoundary>
  );

MainNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainNav;
