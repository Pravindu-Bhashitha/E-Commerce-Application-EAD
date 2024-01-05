import React from 'react';
import './OverlayMessage.css';

const OverlayMessage = ({ message, onClose }) => {
  return (
    <div className='overlay-message'>
      <div className='overlay-content'>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OverlayMessage;
