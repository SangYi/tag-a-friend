import React from 'react';
import './ToolTip.css';

const ToolTip = () => {
  return (
    <div>
      <div className="tooltip">Hover over me
        <span className="tooltiptext">Tooltip text</span>
      </div>
    </div>
  )
}

export default ToolTip;