import React from 'react';
import {observer} from 'mobx-react';
import './FaceBox.css';

import SubmitNameForm from 'forms/SubmitNameForm';

const FaceBox = ({
  box: {topframe, rightframe, bottomframe, leftframe, name, face_id, changeName},
  handleNameChange,
  ...props
}) => {
  return (
    <div className='bounding-box tooltip' 
      onDoubleClick={()=> console.log('double clicked!!!')}
      style={{
        top: `${topframe}%`, 
        right: `${100 - rightframe}%`, 
        bottom: `${100 - bottomframe}%`, 
        left: `${leftframe}%`,
      }}
    >
      { 
        (name || changeName) 
        ? <span className="tooltiptext">{name}</span>
        : <SubmitNameForm className="nameinput" face_id={face_id}/>
      } 
    </div>
  )
}

export default observer(FaceBox);