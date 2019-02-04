import React from 'react';
import "./MainTitle.scss";

const MainTitle = ({title,path}) => {
  return (
    <div className="main-title">
      <h1 className="main-title__title">{title}</h1>
      <p className="main-title__path">{path}</p>
    </div>
  )
}

export default MainTitle
