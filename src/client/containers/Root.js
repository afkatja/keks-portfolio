import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ErrorBoundary from '../components/ErrorBoundary';

const mapStateToProps = state => ({
  language: state.language,
});

const withState = connect(mapStateToProps, null);

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { language, children } = this.props;
    const messages = require('../translations/locales/' + language + '.json');
    return (
      <ErrorBoundary>
        <IntlProvider locale={language} key={language} messages={messages}>
          {children}
        </IntlProvider>
      </ErrorBoundary>
    )
  }
}

export default withState(Root);
