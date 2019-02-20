import React, { Component } from 'react';
import './Work.scss';
import SubNav from '../../../Common/Nav/SubNav';
import SubTitle from '../../../Common/MainTitle/SubTitle';
import Popup from '../../../Common/Popup/Popup';
import WorkGrid from './WorkGrid';
import {getWroks} from '../../../../services/workService';
import {getTypesData} from '../../../../services/typeService';
export default class Work extends Component {

  state = {
    worksData: [],
    typesData:[],
    isPopupOn: false,
    currentWork: "",
    currentTypeID:""
  }

  onClick = (item) => {
    this.setState({currentTypeID:item.id});
  }

  popupToggleHandler = () => {
    this.setState(preState => ({
      isPopupOn: !preState.isPopupOn
    }))
  }

  currentWorkToggleHandler = (work) => {
    const preWork = this.state.currentWork;
    this.setState({
      currentWork: work
    })
  }

  componentDidMount() {
    const worksData = getWroks();
    console.log(worksData);
    this.setState({worksData});

    const typesData = getTypesData();
    const typesDataAddAll = [{id:"", name:"All"}, ...typesData];
    this.setState({typesData: typesDataAddAll});
  }

  getFilteredWorksData = () => {
    const {worksData, currentTypeID} = this.state;

    const filteredWorksData = currentTypeID === "" ? 
    worksData:
    worksData.filter(work => {
      let isExist = work.tags.find(tag => tag.id === currentTypeID)? true : false;
      return isExist;
    })

    return filteredWorksData;
  }


  render() {


    // Filter works by current type
    const filteredWorksData = this.getFilteredWorksData();


    return (
      <div className="work">
        <SubTitle>Recent Works</SubTitle>
        <SubNav data={this.state.typesData} onClick={this.onClick} />
        <WorkGrid 
          filteredWorksData={filteredWorksData} 
          currentWorkToggleHandler={this.currentWorkToggleHandler} 
          popupToggleHandler={this.popupToggleHandler} 
        />
        <Popup isOn={this.state.isPopupOn} onToggle={this.popupToggleHandler} data={this.state.currentWork} />
      </div>
    )
  }
}
