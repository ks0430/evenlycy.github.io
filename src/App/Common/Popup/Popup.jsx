import React, {Component} from 'react';
import Button from '../Button/Button';
import "./Popup.scss";

class Popup extends Component {

  render() {
    const {isOn, onToggle} = this.props;
    return(
      <React.Fragment>
      {
        !isOn ? null :       
          <div className="popup">
            <div className="popup__bg"></div>
            <div className="popup__body">
              <button className="popup__close" onClick={onToggle}></button>
              <img className="popup__img mb-4" src="https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
              <div className="popup__content">
                <p className="popup__type">Web App</p>
                <h3 className="popup__title mb-4">A music store</h3>
                <p className="popup__text mb-5">A music store descrption. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum quidem ratione atque fugit, quibusdam soluta ullam neque recusandae iste illo itaque eligendi vero commodi rem harum a qui explicabo?</p>
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
