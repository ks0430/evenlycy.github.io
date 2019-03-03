import React, { Component } from 'react'
import "./MainTitle.scss";

export default class MainTitle extends Component {
  state = {
    height: window.innerHeight,
  }
  
  render() {
    const {title, path} = this.props;
    const height = window.innerHeight;
    console.log("height",height);
    return (
      <div className="main-title" style={{height:this.state.height}}>
        <h1 className="main-title__title" data-text={title}>{title}</h1>
        <p className="main-title__path">{path}</p>
      </div>
    )
  }
}


