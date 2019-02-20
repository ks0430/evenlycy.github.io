import React from 'react';
import Card from '../../../Common/Card/Card';
import "./WorkGrid.scss";

const WorkGrid = ({filteredWorksData, currentWorkToggleHandler, popupToggleHandler}) => {
  return (
    <div className="work-grid">
      {filteredWorksData.map(work =>           
        <div key={work.id} className="work-grid__item">
          <Card 
            imgUrl= { work.imgUrl }
            type={ work.type }
            title={ work.title }
            onClick={() => { currentWorkToggleHandler(work); popupToggleHandler(); }}
          />
        </div>
      )}
    </div>
  )
}

export default WorkGrid
