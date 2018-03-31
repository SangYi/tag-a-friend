import React from 'react';
import './FaceBox.css';

const FaceBox = ({
  box: {topframe, rightframe, bottomframe, leftframe, name},
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
      {name ? <span className="tooltiptext">{name}</span> : <input className="nameinput" type="text" placeholder="Enter a name" />} 
    </div>
  )
}

export default FaceBox;