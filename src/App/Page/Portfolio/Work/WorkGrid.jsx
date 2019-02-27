import React from 'react';
import Card from '../../../Common/Card/Card';
import { Flipper, Flipped } from 'react-flip-toolkit';
import "./WorkGrid.scss";

const WorkGrid = ({filteredWorksData, currentWorkToggleHandler, popupToggleHandler}) => {
  return (
    <div >
    <Flipper className="work-grid" flipKey={filteredWorksData.length > 0 ? filteredWorksData.reduce((total,item) => total + "-" +item.id) : ""}>

      {filteredWorksData.length > 0 ? 
        filteredWorksData.map(work =>      
        <Flipped key={work.id} flipId={work.id}>
          <div key={work.id} className="work-grid__item">
            <Card 
              imgUrl= { work.imgUrl }
              type={ work.type }
              title={ work.title }
              onClick={() => { currentWorkToggleHandler(work); popupToggleHandler(); }}
            />
          </div>
        </Flipped>  
        ) :
        <NoCard />
      }   
    </Flipper>
    </div>
  )
}

const NoCard = () => <div className="work-grid__nothing">Nothing Found!</div>

export default WorkGrid
