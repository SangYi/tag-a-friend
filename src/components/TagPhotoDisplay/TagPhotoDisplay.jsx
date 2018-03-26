import React from 'react';
import {inject, observer} from 'mobx-react';

// import './TagPhotoDisplay.css';

import FaceBox from 'components/FaceBox';

const TagPhotoDisplay = ({
  store: {
    imageUrl,
    boxes,
  },
  ...props
}) => {
  console.log('boxes', boxes);
  return (
    <div>
      <h2>TagPhotoDisplay</h2>
      <div style={{ 
        position: 'absolute',
        display: 'inline-block',
        width: '80%'
        // minWidth: '100px'
      }}>
        <img id='inputimage' alt='' src={imageUrl} width='100%' height='auto'/>
        {boxes.map( (box, i) => {
          return <FaceBox key={i} box={box}/>
          // return <div key={i} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        })}
      </div>
    </div>
  )
}

export default inject('store')(observer(TagPhotoDisplay));