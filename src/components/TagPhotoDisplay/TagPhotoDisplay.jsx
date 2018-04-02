import React from 'react';
import {inject, observer} from 'mobx-react';
// import './TagPhotoDisplay.css';

import FaceBox from 'components/FaceBox';

const TagPhotoDisplay = ({
  store: {
    imageUrl,
    boxes,
    selectedPhoto,
    changeName,
    toggleChangeName,
  },
  ...props
}) => {
  const { url, faces } = selectedPhoto;
  return (
    <div>
      <h2>TagPhotoDisplay</h2>
      <div style={{ 
        position: 'relative',
        display: 'inline-block',
        width: '80%'
      }}>
        <img id='inputimage' alt='' src={url || imageUrl} width='100%' height='auto'/>
        {faces.map( (face, faceIndex) => {
          // return <FaceBox key={face.face_id} box={face}/>
          // return <FaceBox key={face.face_id}  face={face} {...{faceIndex,toggleChangeName}}/>
          return <FaceBox key={face.face_id}  {...{face, faceIndex, changeName, toggleChangeName}}/>
        })}
      </div>
    </div>
  )
}

export default inject('store')(observer(TagPhotoDisplay));