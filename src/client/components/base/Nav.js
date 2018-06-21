import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { Link } from 'react-router-dom';

const Nav = ({ routes }) => (
  <Fragment>
    {
      /*
        We have two default routes. One is a root and another one is a home.
        Display navigation when we have more than default routes.
      */
      routes.length > 2 && (
        <nav className="nav">
          <ul className="nav__items">
            {
              routes.map(({ path, displayName }, idx) => {
                  const activeMenuClassName = location.pathname.includes(path) ? 'nav__item--active' : ''; // eslint-disable-line no-restricted-globals

                  return (
                    isString(path) && path !== '/' &&
                    <li
                      key={ idx }
                      className={ `nav__item ${activeMenuClassName}` }
                    >
                      <Link to={ path }>{ displayName }</Link>
                    </li>
                  );
                },
              )
            }
          </ul>
        </nav>
      )
    }
  </Fragment>
);

Nav.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
  })).isRequired,
};

export default Nav;
