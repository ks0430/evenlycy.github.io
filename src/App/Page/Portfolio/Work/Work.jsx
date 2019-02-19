import React, { Component } from 'react';
import './Work.scss';
import Card from '../../../Common/Card/Card';
import SubNav from '../../../Common/Nav/SubNav';
import SubTitle from '../../../Common/MainTitle/SubTitle';
import {getWroks} from '../../../../services/workService';
export default class Work extends Component {

  state = {
    worksData: [],
  }

  onClick = () => {
    console.log("click!");
  }

  componentDidMount() {
    const worksData = getWroks();
    console.log(worksData);
    this.setState({worksData});
  }

  render() {
    const {worksData} = this.state;
    return (
      <div className="work">
        <SubTitle>Recent Works</SubTitle>
        <SubNav onClick={this.onClick} />
        <div className="work-grid">
          {worksData.map(work =>           
            <div key={work.id} className="work-grid__item">
              <Card 
                imgUrl= { work.imgUrl }
                type={ work.type }
                title={ work.title }
              />
            </div>
          )
        }
        </div>
      </div>
    )
  }
}
