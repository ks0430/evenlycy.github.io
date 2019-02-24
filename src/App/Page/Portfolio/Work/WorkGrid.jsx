import React from 'react';
import Card from '../../../Common/Card/Card';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import "./WorkGrid.scss";

const WorkGrid = ({filteredWorksData, currentWorkToggleHandler, popupToggleHandler}) => {
  return (
    <div >
    <TransitionGroup className="work-grid">
      {filteredWorksData.map(work =>      
        <CSSTransition key={work.id} in={true} classNames="work-grid-anim" timeout={500}>
            <div key={work.id} className="work-grid__item">
              <Card 
                imgUrl= { work.imgUrl }
                type={ work.type }
                title={ work.title }
                onClick={() => { currentWorkToggleHandler(work); popupToggleHandler(); }}
              />
            </div>
        </CSSTransition>  
      )}   
    </TransitionGroup>
    </div>
  )
}

export default WorkGrid
