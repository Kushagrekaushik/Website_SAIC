import React, { useState } from 'react';
import './Reunion.css';
import img1 from '../Components/Gallery/Reunion/img1.jpg';
import img2 from '../Components/Gallery/Reunion/img2.jpg';
import img3 from '../Components/Gallery/Reunion/img3.jpg';
import img4 from '../Components/Gallery/Reunion/img4.jpg';
import img5 from '../Components/Gallery/Reunion/img5.jpg';
import img6 from '../Components/Gallery/Reunion/img6.jpg';
import img7 from '../Components/Gallery/Reunion/img7.jpg';
import img8 from '../Components/Gallery/Reunion/img8.jpg';




const images = [

  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8
];

const Reunion = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImageIndex(index);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  const navigateImage = (step) => {
    const newIndex = selectedImageIndex + step;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className='reunion-container'>
      <div className='reunion-background'>
      <div className='reunion-overlay'>
        <div className='reunion-descrition'>
        <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='title'></div> 
          <h1 className='reunion-descrition-h1'>Reunion</h1>
          <p className='reunion-descrition-p'> "Fostering a strong alumni-student connection is at the core of SAIC's mission. To achieve this, we host an annual Alumni Reunion event, bringing together former Thapar alumni for a two-day journey down memory lane. They reconnect with faculty, tour the campus, and participate in cultural programs, all to strengthen the enduring bond between past and present, preserving Thapar University's legacy."</p>
        </div>
      </div>
      </div>


<div className='reunionblack_bg'>

      <div className="gcontainer">
        <div className="gallery">
          {images.map((url, index) => (
            <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            onClick={() => openImage(index)}
            />
            ))}
        </div>
      </div>
      {isImageOpen && (
        <div className="overlay">
          <span className="close-btn" onClick={closeImage}>
            &times;
          </span>
          <div className="image-popup">
            <img
              src={images[selectedImageIndex]}
              alt={`Image ${selectedImageIndex}`}
              />
            <div className="nav-btns">
              <button onClick={() => navigateImage(-1)} disabled={selectedImageIndex === 0}>
                &lt; Prev
              </button>
              <button onClick={() => navigateImage(1)} disabled={selectedImageIndex === images.length - 1}>
                Next &gt;
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Reunion;

