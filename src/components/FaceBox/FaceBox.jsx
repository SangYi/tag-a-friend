import React from 'react';
import {observer} from 'mobx-react';
import './FaceBox.css';

import SubmitNameForm from 'forms/SubmitNameForm';

const FaceBox = ({
  face: {topframe, rightframe, bottomframe, leftframe, name, face_id},
  faceIndex,
  changeName,
  toggleChangeName,
  ...props
}) => {
  return (
    <div className='bounding-box tooltip' 
      onDoubleClick={()=> {
        toggleChangeName()
      }}
      onMouseLeave={()=> {
        changeName && toggleChangeName()
      }}
      style={{
        top: `${topframe}%`, 
        right: `${100 - rightframe}%`, 
        bottom: `${100 - bottomframe}%`, 
        left: `${leftframe}%`,
      }}
    >
      { 
        (name && changeName===false)
        ? <span className="tooltiptext">{name}</span>
        : <SubmitNameForm className="nameinput" {...{face_id, faceIndex}}/>
      } 
    </div>
  )
}

export default observer(FaceBox);