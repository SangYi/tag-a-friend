import React from 'react';
// import './TagPhotoDisplay.css';

import FaceBox from 'components/FaceBox';

const TagPhotoDisplay = ({
  imageUrl,
  boxes,
  ...props
}) => {
  return (
    <div>
      <div>
      <img id='inputimage' alt='' src={imageUrl} width='80%' height='auto'/>
      {boxes && boxes.map( (box, i) => {
        return <FaceBox key={i} box={box}/>
        // return <div key={i} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      })}
      </div>
    </div>
  )
}

export default TagPhotoDisplay;