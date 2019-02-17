import React, { Component } from 'react';
import Fade from './Fade';

export default class TransitionExample extends Component {
  state = {
    toggle: false,
    transitionGroup: [
      1,2,3,4
    ]
  }

  toggleHandler = () => {
    const toggle = this.state.toggle;
    this.setState({toggle: !toggle });
  }

  deleteHandler = (id) => {
    const transitionGroup = this.state.transitionGroup.filter(item => item !== id);
    this.setState({transitionGroup});
  }

  // Transition is not effected on unmounted progress.
  // Only in prop affect the state of transition component
  // Use transition group to control the mounting and unmounting progress of each transition component
  render() {
    const { transitionGroup } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.toggleHandler}> Toggle states </button> 
        {transitionGroup.map(transitionID => <Fade key={transitionID} in={this.state.toggle} onDelete={this.deleteHandler} id={transitionID}/>)}
      </React.Fragment>
    )
  }
}
