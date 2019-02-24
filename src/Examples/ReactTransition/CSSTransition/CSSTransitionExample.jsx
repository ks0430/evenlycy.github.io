import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import "./CSSTransitionExample.scss";

export default class CSSTransitionExample extends Component {
  state = {
    toggle: true,
  }

  toggleHandler = () => {
    const { toggle } = this.state;
    this.setState({toggle: !toggle});
  }

  // Tips:
  // The first frame started when the class is added to the element
  // Compare to previous value, change it to current value in certain way
  // So transition property should be added in enter-active class
  // and done class should be added, otherwise it will bot be found
  // Attension: classnames in CSSTransition!
  render() {
    return (
      <div>
        <button onClick={this.toggleHandler}>Toggle</button>
        <CSSTransition in={this.state.toggle} timeout={1500} classNames="block">
          {state => (
            <div>
              Show css transition state: {state}
            </div>
          )}
        </CSSTransition> 
      </div>
    )
  }
}

