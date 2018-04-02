import React from 'react';
import './FaceBox.css';

import SubmitNameForm from 'forms/SubmitNameForm';

const FaceBox = ({
  box: {topframe, rightframe, bottomframe, leftframe, name, face_id},
  ...props
}) => {
  return (
    <div className='bounding-box tooltip' 
      style={{
        top: `${topframe}%`, 
        right: `${100 - rightframe}%`, 
        bottom: `${100 - bottomframe}%`, 
        left: `${leftframe}%`,
      }}
    >
      { 
        name 
        ? <span className="tooltiptext">{name}</span>
        : <SubmitNameForm face_id={face_id}/>
          // : <input className="nameinput" type="text" placeholder="Enter a name" />
      } 
    </div>
  )
}

export default FaceBox;