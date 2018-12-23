import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import navIcon from '../../assets/navIcon.png';

const propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    displayName: PropTypes.string,
  })).isRequired,
};

const Nav = ({ routes }) => (
  <Fragment>
    <header className="header">
      <div className="branding">
          <img className="branding__logo" src={ navIcon } />
          <h1 className="branding__name">Cryptocurrency</h1>
      </div>
      <nav className="nav">
        <ul className="nav__items">
          {
            routes.map(({ path, displayName }, idx) => (
              isString(path) && !!displayName
                  && (
                  <li
                    key={ idx }
                    className={ classNames(
                      'nav__item',
                      {
                        'nav__item--active': location.pathname.includes(path), // eslint-disable-line no-restricted-globals
                      },
                    ) }
                  >
                    <Link to={ path }>{ displayName }</Link>
                  </li>
                  )
            ),
            )
          }
        </ul>
      </nav>
    </header>
  </Fragment>
);

Nav.propTypes = propTypes;

export default Nav;
