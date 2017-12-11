import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

const TOGGLE_CONTEXT = '__toggle__';

export const withToggle = (Comp) => {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT];
    return (<Comp {...props} {...toggleContext} />);
  }
  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };
  Wrapper.displayName = `withToggle(${Comp.displayName || Comp.name})`;
  Wrapper.WrappedComponent = Comp;
  return hoistNonReactStatic(Wrapper, Comp);
};

const renderSwitch = ({ on, toggle, ...props }) => (<button type="button" onClick={toggle} {...props}>Toggle {on}</button>);

const ToggleOn = ({ on, children }) => on ? children : null; // eslint-disable-line
const ToggleOff = ({ on, children }) => !on ? children : null; // eslint-disable-line
const ToggleButton = ({ on, toggle, ...props }) => renderSwitch({
  on,
  toggle,
  ...props,
});

const compose = fns => args => console.log(fns) || fns.forEach(fn => fn && fn(...args)); //eslint-disable-line

export default class Toggle extends Component {
  static defaultProps = {
    defaultOn: false,
    onToggle: () => {},
    onReset: () => {},
  };
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };
  static On = withToggle(ToggleOn);
  static Off = withToggle(ToggleOff);
  static Button = withToggle(ToggleButton);

  constructor(props) {
    super(props);
    this.initialState = {
      on: this.props.defaultOn,
    };
    this.state = this.initialState;
    this.toggle = () => this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on),
    );

    this.reset = () => this.setState(
      this.initialState,
      () => this.props.onReset(this.state.on),
    );
    this.getChildContext = () => ({
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle,
      },
    });

    this.getTogglerProps = ({ onClick, ...renderProps } = {}) => ({
      'aria-expanded': this.state.on,
      onClick: compose(onClick, this.toggle),
      ...renderProps,
    });
  }

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      reset: this.reset,
      getTogglerProps: this.getTogglerProps,
    });
  }
}
