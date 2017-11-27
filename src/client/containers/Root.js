import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider } from 'react-intl';

// Import Redux Store Provider Component
import { Provider } from 'react-redux';

// Import our Component
import HelloWorld from '../components/HelloWorld.js';

export default class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en'
    }
  }

  render() {
    const { language } = this.state;
    const messages = require('../translations/locales/' + language + '.json');

    return (
      <IntlProvider locale={language} key={language} messages={messages}>
        <Provider store={this.props.store}>
          <div className="site-container">
            <select
              value={language}
              onChange={({ target: { value } }) =>
                this.setState({ language: value })}
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="nl">Nederlands</option>
            </select>
            <HelloWorld />
          </div>
        </Provider>
      </IntlProvider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
