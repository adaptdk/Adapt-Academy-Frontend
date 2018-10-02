import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Index = ({
  title,
  markup,
}) => (
  <html lang="en">
    <head>
      <title>{ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/png" href="/assets/favicons/favicon.png" />
      <link rel="stylesheet" href="bundle.css" />
    </head>
    <body>
      {
        markup ?
          <div id="app" dangerouslySetInnerHTML={ { __html: markup } } /> :
          <div id="app" />
      }
      <script src="bundle.js" />
    </body>
  </html>
);
/* eslint-enable */

Index.propTypes = {
  title: PropTypes.string.isRequired,
  markup: PropTypes.string,
};

Index.defaultProps = {
  markup: '',
};

export default Index;
