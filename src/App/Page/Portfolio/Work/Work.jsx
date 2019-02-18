import React, { Component } from 'react';
import './Work.scss';
import WorkCard from '../../../Common/Card/WorkCard';
import SubNav from '../../../Common/Nav/SubNav';
export default class Work extends Component {

  onClick = () => {
    console.log("click!");
  }

  render() {
    return (
      <div className="work">
        <h2 className="subtitle">Works</h2>
        <SubNav onClick={this.onClick} />
        <div className="work-grid">
          <div className="work-grid__item">
            <WorkCard />
          </div>
          <div className="work-grid__item">
            <WorkCard />
          </div>
          <div className="work-grid__item">
            <WorkCard />
          </div>
          <div className="work-grid__item">
            <WorkCard />
          </div>
          <div className="work-grid__item">
            <WorkCard />
          </div>
        </div>
      </div>
    )
  }
}
