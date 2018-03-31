import React from 'react';
import {inject, observer} from 'mobx-react';
// import './TagPhotoDisplay.css';

import FaceBox from 'components/FaceBox';

const TagPhotoDisplay = ({
  store: {
    imageUrl,
    boxes,
    currentPhoto,
  },
  ...props
}) => {
  const { url, faces } = currentPhoto;
  return (
    <div>
      <h2>TagPhotoDisplay</h2>
      <div style={{ 
        position: 'relative',
        display: 'inline-block',
        width: '80%'
      }}>
        <img id='inputimage' alt='' src={url || imageUrl} width='100%' height='auto'/>
        {faces.map( face => {
          return <FaceBox key={face.face_id} box={face}/>
        })}
      </div>
    </div>
  )
}

export default inject('store')(observer(TagPhotoDisplay));