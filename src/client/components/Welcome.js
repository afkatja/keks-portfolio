import React from 'react';
import { FormattedRelative, FormattedMessage } from 'react-intl';
import moment from 'moment';

import ErrorBoundary from './ErrorBoundary';
import Toggle from './atoms/Toggle/Toggle';

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
            ),
          }}
        />
      </h1>
      <Toggle
        defaultOn
        onReset={on => console.log('reset state to ', on)}
        render={({ ...toggle }) =>
          (<div>Toggle is {toggle.on}
            <button
              {...toggle.getTogglerProps({
                onClick: () => console.log('another click handler', toggle.on),
                id: 'btnId',
              })}
            >{toggle.on ? 'on' : 'off'}</button>
            <button onClick={() => toggle.reset()}>Reset</button>
          </div>)
        }
      />
      {/* <Toggle onToggle={on => console.log('toggled', on)}>
        <Toggle.On>The button in on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button />
      </Toggle> */}
    </ErrorBoundary>
  );
}
