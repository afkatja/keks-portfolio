import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store/store';

// Import React-Intl with supported languages
import { addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';

// Import Styles
import './stylesheets/main.scss';

import App from './App';
import Root from './containers/Root';

// Globally register React-Intl languages
addLocaleData([...ru, ...en, ...nl]);

if (!global.Intl) {
  require.ensure(
    [
      'intl',
      'intl/locale-data/jsonp/ru.js',
      'intl/locale-data/jsonp/en.js',
      'intl/locale-data/jsonp/nl.js',
    ],
    function(require) {
      require('intl');
      require('intl/locale-data/jsonp/en.js');
      require('intl/locale-data/jsonp/ru.js');
      require('intl/locale-data/jsonp/nl.js');
      renderApp();
    }
  );
} else {
  renderApp();
}

// Render application
function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <Root>
        <App />
      </Root>
    </Provider>,
    document.getElementById('root')
  );
}
