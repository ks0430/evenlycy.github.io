import React from 'react';
import './SubTitle.scss';

const SubTitle = ({children}) => {
  return (
    <h2 className="sub-title mb-5">
      {children}
    </h2>
  )
}

export default SubTitle
