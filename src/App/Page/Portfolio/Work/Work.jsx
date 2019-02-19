import React, { Component } from 'react';
import './Work.scss';
import Card from '../../../Common/Card/Card';
import SubNav from '../../../Common/Nav/SubNav';
import SubTitle from '../../../Common/MainTitle/SubTitle';
export default class Work extends Component {

  onClick = () => {
    console.log("click!");
  }

  render() {
    return (
      <div className="work">
        <SubTitle>Recent Works</SubTitle>
        <SubNav onClick={this.onClick} />

        <div className="work-grid">
          <div className="work-grid__item">
            <Card 
              imgUrl="https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              type="Web App"
              title="A music store"
            />
          </div>
          <div className="work-grid__item">
            <Card 
              imgUrl="https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              type="Web App"
              title="A music store"
            />
          </div>

        </div>
      </div>
    )
  }
}
