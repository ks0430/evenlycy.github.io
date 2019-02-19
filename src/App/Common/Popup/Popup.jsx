import React, {Component} from 'react';
import Button from '../Button/Button';
import "./Popup.scss";

class Popup extends Component {

  render() {
    const {isOn, onToggle, data} = this.props;
    console.log(data);
    const {title, imgUrl, type, text} = data;
    return(
      <React.Fragment>
      {
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
                <Button className="popup__button" btnStyle="border" onClick={onToggle}>View Project</Button>
              </div>
            </div>
          </div>  
      }
      </React.Fragment>
    )
  }
}

export default Popup
