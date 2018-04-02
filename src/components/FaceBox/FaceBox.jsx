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
  console.log('changeName', changeName)
  return (
    <div className='bounding-box tooltip' 
      onDoubleClick={()=> {
        console.log('faceIndex on onDoubleClick');
        toggleChangeName()
      }}
      onMouseLeave={()=> {
        console.log('faceIndex on onMouseLeave');
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
        // (name && !!((changeName && changeName.get()))===false)
        (name && changeName===false)
        ? <span className="tooltiptext">{name}</span>
        : <SubmitNameForm className="nameinput" {...{face_id, faceIndex}}/>
      } 
    </div>
  )
}

export default observer(FaceBox);