import React from 'react';
import './FaceBox.css';

const Facebox = ({
  box: {topRow, rightCol, bottomRow, leftCol},
  ...props
}) => {
  return (
    <div className='bounding-box' 
      style={{
        top: topRow, 
        right: rightCol, 
        bottom: bottomRow, 
        left: leftCol
      }}
    />
  )
}

export default FaceBox;