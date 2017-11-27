import React from 'react';
import { FormattedRelative, FormattedMessage } from 'react-intl';
import moment from 'moment';

import ErrorBoundary from './ErrorBoundary';

export default function Welcome() {
  return (
    <ErrorBoundary>
      <h1 className="headline">
        <FormattedMessage
          id="app.welcome.greeting"
          description="Greeting to welcome the user to the app"
          defaultMessage="Hello, {name}! Last updated: {date}"
          values={{
            name: <i>World</i>,
            date: (
              <FormattedRelative
                value={moment().subtract(1, 'days')}
                options={{ style: 'numeric', units: 'second' }}
              />
            )
          }}
        />
      </h1>
    </ErrorBoundary>
  );
}
