"use client"; // Add this for Next.js usage
import React, { useState, useRef } from 'react';
import carData from './Data.js'; // Import the car data
import './Third.css';

const Third = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current car
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track current image in modal
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carData.length); // Move to next car
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carData.length) % carData.length); // Move to previous car
  };

  const handleOpenModal = () => {
    setShowModal(true); // Show modal
    setCurrentImageIndex(0); // Reset to the first image of the selected car
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide modal
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % carData[currentIndex].images.length
    ); // Move to next image in the modal
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + carData[currentIndex].images.length) % carData[currentIndex].images.length
    ); // Move to previous image in the modal
  };

  const currentCar = carData[currentIndex]; // Get the current car's data
  const id = carData[currentIndex];

  return (
    <div>
      <div className="Third-hero-section" id="crystan">
        <div className="image-section" >
          <img src={currentCar.image} alt={currentCar.car_name} /> {/* Display car image */}
        </div>
        <div className="car-details">
          <h2>{currentCar.car_name}</h2>
          <ul>
            <li>Model: <a>{currentCar.model}</a></li>
            <li>Price: <a>{currentCar.price}</a> </li> {/* You can add price here if needed */}
            <li>Engine: <a>{currentCar.engine}</a></li>
            <li>Power: <a>{currentCar.power}</a></li>
            <li>Torque: <a>{currentCar.torque}</a></li>
          </ul>
          <div className="buttons">
            <button>BUY NOW</button>
            <button onClick={handleOpenModal}>SEE IMAGES</button> {/* See Images Button */}
          </div>
        </div>
        <div className="left-right-buttons">
          {/* Left and Right navigation buttons */}
          <button className='arrow-btn' onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow">
              <path fillRule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path>
            </svg>
          </button>
          <button className='arrow-btn' onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow">
              <path fillRule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button>
            <button className="prev-button" onClick={handlePrevImage}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg></button>
            <img src={currentCar.images[currentImageIndex]} alt={currentCar.car_name} />
            <button className="next-button" onClick={handleNextImage}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Third;
