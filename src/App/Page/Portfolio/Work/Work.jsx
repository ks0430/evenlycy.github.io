import React, { Component } from 'react';
import SubNav from '../../../Common/Nav/SubNav';
import SubTitle from '../../../Common/MainTitle/SubTitle';
import Popup from '../../../Common/Popup/Popup';
import WorkGrid from './WorkGrid';
import {getWroks} from '../../../../services/workService';
import {getTypesData} from '../../../../services/typeService';
import _ from 'lodash';
import './Work.scss';
export default class Work extends Component {

  state = {
    worksData: [],
    typesData:[],
    isPopupOn: false,
    currentWork: "",
    currentTypeIDs:[],
  }

  onClick = (type) => {
    const originIDs = this.state.currentTypeIDs;
    const { id } = type;
    // If type is all, return empty arr.
    if(id === "") {
      this.setState({currentTypeIDs:[]});
      return;
    }
    // Toggle type in currentTypeArr.
    const currentTypeIDs = originIDs.indexOf(id) < 0 ?  
                           [...originIDs, id]:
                           originIDs.filter(item => item !== id);
    this.setState({currentTypeIDs});
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
    this.setState({worksData});

    const typesData = getTypesData();
    const typesDataAddAll = [{id:"", name:"All"}, ...typesData];
    this.setState({typesData: typesDataAddAll});
  }

  getFilteredWorksData = () => {
    const {worksData, currentTypeIDs} = this.state;
    // If type is all, return origin worksData
    if(currentTypeIDs.length === 0) return worksData;
    // If each work contains all current types, filter.
    // const filteredWorksData = worksData.filter(work => {
    //     let flag = _.difference(currentTypeIDs, _.map(work.tags,'id') ).length === 0 ? true :false;
    //     return flag;
    // }) 

    // If each work have at least one tag 
    const filteredWorksData = worksData.filter(work =>{
      const newArr = [...currentTypeIDs,..._.map(work.tags,'id')];
      const length = newArr.length;
      const uniqLength = _.uniq(newArr).length;
      return uniqLength < length 
    }
    )

    const sortWorksData = _.orderBy(filteredWorksData,item => item.tags.length, ['desc'] );
    // return filteredWorksData;
    return sortWorksData;
  }


  render() {
    // Filter works by current type
    const filteredWorksData = this.getFilteredWorksData();

    const { 
      currentTypeIDs, 
      typesData, 
      isPopupOn, 
      currentWork
    } = this.state;

    return (
      <div className="work">
        <SubTitle>Recent Works</SubTitle>
        <SubNav data={typesData} currentData={currentTypeIDs} onClick={this.onClick} />
        <WorkGrid 
          filteredWorksData={filteredWorksData} 
          currentWorkToggleHandler={this.currentWorkToggleHandler} 
          popupToggleHandler={this.popupToggleHandler} 
        />
        <Popup isOn={isPopupOn} onToggle={this.popupToggleHandler} data={currentWork} />
      </div>
    )
  }
}
