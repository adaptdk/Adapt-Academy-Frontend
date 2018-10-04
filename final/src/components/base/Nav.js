// eslint-disable-global location
import React, { Fragment } from 'react';
import {
  arrayOf,
  shape,
  string,
} from 'prop-types';
import { isString } from 'lodash';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const propTypes = {
  routes: arrayOf(shape({
    path: string,
    displayName: string,
  })).isRequired,
};

const Nav = ({ routes }) => (
  <Fragment>
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
  </Fragment>
);

Nav.propTypes = propTypes;

export default Nav;
