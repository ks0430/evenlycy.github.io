import React, {Component} from 'react';
import Button from '../Button/Button';
import { CSSTransition } from 'react-transition-group';
import {Link } from 'react-router-dom';
import "./Popup.scss";

class Popup extends Component {

  render() {
    const {isOn, onToggle, data} = this.props;
    const {title, imgUrl, type, text, link} = data;
    return(
      <React.Fragment>
        <CSSTransition in={isOn} timeout={150} classNames="popup">
          { state => (
            !isOn ? null :       
              <div className="popup">
                <div className="popup__bg" onClick={ onToggle }></div>
                <div className="popup__body">
                  <button className="popup__close" onClick={ onToggle }></button>
                  <img className="popup__img mb-3" src={ imgUrl } alt=""/>
                  <div className="popup__content">
                    <p className="popup__type">{ type }</p>
                    <h3 className="popup__title mb-4">{ title }</h3>
                    <p className="popup__text mb-5">{ text }</p>
                    <a href={link} target="_blank" >
                      <Button btnStyle="border">View Project</Button>
                    </a>
                  </div>
                </div>
              </div>  
            )
          }
        </CSSTransition>
      </React.Fragment>
    )
  }
}

export default Popup
