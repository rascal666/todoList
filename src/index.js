import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import WebFont from 'webfontloader';

WebFont.load({

  google: {
    families: ['Droid Sans', 'Droid Serif']

  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

