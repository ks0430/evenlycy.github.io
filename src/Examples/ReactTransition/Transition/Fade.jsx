import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 3000;

// default style
const defaultStyle = {
  transition: `background-color ${duration}ms ease-in-out`,
  backgroundColor: "red"
}

// duration is between entering & entered, exiting & exited
// animation is played after entered while css class is changing, not during entering and entered
// entering animation & entered animation are two different animations

const transitionStyles = {
  entering: { backgroundColor: "white" },
  entered: { backgroundColor: "blue" },
  exiting: { backgroundColor:"yellow" },
  exited: { backgroundColor:"purple" }
}

const Fade = ({id, in: inProp, onDelete}) => (
  <React.Fragment>
  <Transition in={inProp} timeout={duration} mountOnEnter >
    {(state) => (
      <div style={{...defaultStyle, ...transitionStyles[state]}}>
      {state}
      </div>
    )}
  </Transition>
  <button onClick={e => onDelete(id)}>Delete</button>
  </React.Fragment>
)

export default Fade;
