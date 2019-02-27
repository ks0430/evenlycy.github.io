import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import "./ReactFlip.scss";

export default class ReactFlip extends Component {
  state = {
    data:[
      {
        id:"001",
        name:"one"
      },
      {
        id:"002",
        name:"two"
      },
      {
        id:"003",
        name:"one"
      },
      {
        id:"004",
        name:"one"
      },
    ]
  }

  onClick = (id) => {
    const data = this.state.data.filter(item => item.id !== id);
    this.setState({data});
  }

  render() {
    const { data } = this.state;
    return (
      <Flipper flipKey={  data.length > 0 ? data.reduce((total, item) => total + "-" + item) : ""}>
          <ul className="react-flip">
            {data.map(item => 
              <Flipped key={item.id} flipId={item.id}>
                <li className="react-flip__item">
                  <button className="react-flip__delete" onClick={() => this.onClick(item.id)}>X</button>
                <p> Grid {item.id}</p>
                </li>
              </Flipped>  
            )}
          </ul>
      </Flipper>
    )
  }
}
