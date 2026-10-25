import React from 'react';
import './Modal.css';

const MapModal = ({ isVisible, onClose, selectedDestination }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{selectedDestination?.title}</h3>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <div className="relative w-full h-96 rounded-lg overflow-hidden map-container">
          <img src={selectedDestination?.mapImage} alt="Map" className="map-image" />
          <div
            className="map-pin absolute h-10 w-10"
            style={{ top: `${selectedDestination?.y}%`, left: `${selectedDestination?.x}%` }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffc107" className="w-6 h-6 animate-pulse">
              <path fillRule="evenodd" d="M11.54 22.351A.75.75 0 0 1 12 22.5a.75.75 0 0 1 .46.149l.745.397a.75.75 0 0 1 .913-.153l1.838-.919a.75.75 0 0 1 .806.134l2.585 2.585a.75.75 0 0 1-.134.806l-.92.839a.75.75 0 0 1-.152.913l-.397.745A.75.75 0 0 1 12.5 22.5a.75.75 0 0 1-.149-.46l-.745-.397a.75.75 0 0 1-.913.153l-1.838.919a.75.75 0 0 1-.806-.134l-2.585-2.585a.75.75 0 0 1 .134-.806l.92-.839a.75.75 0 0 1 .152-.913l.397-.745ZM12 4.5a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V5.25A.75.75 0 0 1 12 4.5Z" clipRule="evenodd" />
              <path d="M11.25 4.59c.783-.284 1.63-.407 2.502-.424a41.025 41.025 0 0 0-2.502.424ZM12 4.5a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V5.25A.75.75 0 0 1 12 4.5Z" />
            </svg>
          </div>
        </div>
        <p className="modal-description mt-4">{selectedDestination?.description}</p>
      </div>
    </div>
  );
};

export default MapModal;