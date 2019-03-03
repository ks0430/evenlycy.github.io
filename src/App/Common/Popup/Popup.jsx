import React, {Component} from 'react';
import Button from '../Button/Button';
import { CSSTransition } from 'react-transition-group';
import sprite from '../../../images/icons/sprite.svg';
import {Link } from 'react-router-dom';
import "./Popup.scss";

class Popup extends Component {

  render() {
    const {isOn, onToggle, data} = this.props;
    const {title, imgUrl, type, text, link, githubLink} = data;
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
                    <div className="popup__title-wrap mb-4 d-flex align-items-center">
                      <h3 className="popup__title mr-4">{ title }</h3>
                      {githubLink==="" ? null : 
                        <a className="popup__github" href={githubLink} target="_blank">
                          <svg className="popup__icon mr-3">
                            <use xlinkHref={`${sprite}#icon-github`} />
                          </svg>
                          <span className="popup__github-title">Github</span>
                        </a>
                      }
                    </div>
                    <p className="popup__text mb-5">{ text }</p>
                    <a href={link} target="_blank" className="mr-4" >
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
