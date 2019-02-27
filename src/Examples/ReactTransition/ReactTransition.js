import React, { Component } from 'react';
import TransitionExample from './Transition/TransitionExample';
import CSSTransitionExample from './CSSTransition/CSSTransitionExample';
import TransitionGroupExample from './TransitionGroup/TransitionGroupExample';
import RouteAnimationExample from './RouteTransition/RouteAnimationExample';

export default class All extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <TransitionExample />
        <CSSTransitionExample /> */}
        <TransitionGroupExample />
        {/* <RouteAnimationExample /> */}
      </React.Fragment>
    )
  }
}
