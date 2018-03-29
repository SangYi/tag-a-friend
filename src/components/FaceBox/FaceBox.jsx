import React from 'react';
import './FaceBox.css';

const FaceBox = ({
  // box: {topRow, rightCol, bottomRow, leftCol},
  box: {top, right, bottom, left},
  ...props
}) => {
  return (
    <div className='bounding-box tooltip' 
      // style={{
      //   top: topRow, 
      //   right: rightCol, 
      //   bottom: bottomRow, 
      //   left: leftCol
      // }}
      style={{
        top: `${top}%`, 
        right: `${100 - right}%`, 
        bottom: `${100 - bottom}%`, 
        left: `${left}%`,
        // top: `44.5%`,
        // right: `50.5%`,
        // bottom: `62.5%`,
        // left: `37.5%`,
      }}
    >
      <span className="tooltiptext">Tooltip text</span>
    </div>
  )
}

export default FaceBox;