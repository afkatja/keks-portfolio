import React, { Component } from 'react';

function ToggleOn({ on, children }) {
  return on ? children : null;
}
function ToggleOff({ on, children }) {
  return on ?  null : children;
}
function ToggleButton({ on, toggle, ...props }) {
  return (
    <button type="button" onClick={toggle} {...props} />
  );
}
export default class MyComponent extends Component {
  static defaultProps = {
    onToggle: () => {},
  };
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  
  constructor(props) {
    super(props);

    this.state = {
      on: false,
    };
    this.toggle = () => this.setState(
      ({ on }) => { on: !on}),
      () => this.props.onToggle(this.state.on)
    );
  }

  render() {
    const children = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      })
    );
    return (
      <div>{children}</div>
    );
  }

}
