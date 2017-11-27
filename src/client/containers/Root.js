import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

// Import Redux Store Provider Component
import { Provider } from 'react-redux';

export default class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en'
    }
  }

  render() {
    const { language } = this.state;
    const { store, children } = this.props;
    const state = store.getState();
    const messages = require('../translations/locales/' + language + '.json');
    return (
      <IntlProvider locale={language} key={language} messages={messages}>
        <Provider store={store}>
          <div>
            {children}
          </div>
        </Provider>
      </IntlProvider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
