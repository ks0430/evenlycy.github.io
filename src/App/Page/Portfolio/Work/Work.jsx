import React, { Component } from 'react';
import './Work.scss';
import Card from '../../../Common/Card/Card';
import SubNav from '../../../Common/Nav/SubNav';
import SubTitle from '../../../Common/MainTitle/SubTitle';
import Popup from '../../../Common/Popup/Popup';
import {getWroks} from '../../../../services/workService';
export default class Work extends Component {

  state = {
    worksData: [],
    isPopupOn: false,
    currentWork: ""
  }

  onClick = () => {
    console.log("click!");
  }

  popupToggleHandler = () => {
    this.setState(preState => ({
      isPopupOn: !preState.isPopupOn
    }))
  }

  workToggleHandler = (work) => {
    const preWork = this.state.currentWork;
    this.setState({
      currentWork: work
    })
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
        {/* <SubNav onClick={this.onClick} /> */}
        <div className="work-grid">
          {worksData.map(work =>           
            <div key={work.id} className="work-grid__item">
              <Card 
                imgUrl= { work.imgUrl }
                type={ work.type }
                title={ work.title }
                onClick={() => { this.workToggleHandler(work); this.popupToggleHandler(); }}
              />
            </div>
          )
        }
        </div>
        <Popup isOn={this.state.isPopupOn} onToggle={this.popupToggleHandler} data={this.state.currentWork} />
      </div>
    )
  }
}
