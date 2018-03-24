import React from 'react';
// import './PhotoModal.css';

const PhotoModal = ({
  onClose,
  ...props
}) => {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '70%',
    height: '80%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    background: '#fff'
  }
  const backdropStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndex: '9998',
    background: 'rgba(0, 0, 0, 0.6)'
  }
  return (
    <div /*className={props.containerClassName}*/ >
      <div /*className={props.className}*/ style={modalStyle}>
        {props.children}
      </div>
      {
        !props.noBackdrop &&
        <div 
          className={props.backdropClassName} 
          style={backdropStyle}
          onClick={e => {
            e.preventDefault()
            onClose()
          }}
        />
      }
    </div>
  )
}

export default PhotoModal;
//peteris.rocks/blog/modal-window-in-react-from-scratch/