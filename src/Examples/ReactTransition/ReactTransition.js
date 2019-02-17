import React, { Component } from 'react';
import TransitionExample from './Transition/TransitionExample';
import CSSTransitionExample from './CSSTransition/CSSTransitionExample';
import TransitionGroupExample from './TransitionGroup/TransitionGroupExample';

export default class All extends Component {
  render() {
    return (
      <React.Fragment>
        <TransitionExample />
        <CSSTransitionExample />
        <TransitionGroupExample />
      </React.Fragment>
    )
  }
}
