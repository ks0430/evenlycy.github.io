import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

import "./TransitionGroupExample.scss";

export default class TransitionGroupExample extends Component {
  state = {
    items: [
      { id: uuid(), text: 'Buy chiaki' },
      { id: uuid(), text: 'Buy midori' },
      { id: uuid(), text: 'Buy midochia' },
      { id: uuid(), text: 'Buy midochiaDoujinzhi' }
    ]
  }

  deleteHandler = ( id ) => {
    const { items } = this.state;
    const newItems = items.filter( item => item.id !== id );
    this.setState({ items: newItems });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={2000}
              classNames="group-item-anim"
            >
              <div>
                <p>{text}</p>
                <button onClick={() => this.deleteHandler(id)}>Delete</button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>  
      </div>
    )
  }
}
