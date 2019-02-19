import React from 'react';
import './Card.scss';

const WorkCard = ({imgUrl, title, type}) => {
  return (
    <div className="flex-card" >
      <figure className="flex-card__figure mb-4">
        <img className="flex-card__img" src={imgUrl} alt=""/>
        <figcaption className="flex-card__figcaption"></figcaption>
      </figure>
      <div className="flex-card__body">
        <h3 className="flex-card__type mb-3">{type}</h3>
        <p className="flex-card__title">{title}</p>  
      </div>
    </div>
  )
}

export default WorkCard
