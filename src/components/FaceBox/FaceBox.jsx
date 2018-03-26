import React from 'react';
import './FaceBox.css';

const FaceBox = ({
  box: {topRow, rightCol, bottomRow, leftCol},
  ...props
}) => {
  return (
    <div className='bounding-box tooltip' 
      style={{
        top: topRow, 
        right: rightCol, 
        bottom: bottomRow, 
        left: leftCol
      }}
    >
      <span className="tooltiptext">Tooltip text</span>
    </div>
  )
}

export default FaceBox;