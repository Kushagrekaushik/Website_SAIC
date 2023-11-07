import React, { useState } from 'react';
import './Troubleshoot.css';
import imgt1 from '../../../images/Gallery/Troubleshoot/DSC_0063 (Medium).jpg';
import imgt2 from '../../../images/Gallery/Troubleshoot/DSC_0197 (Medium).jpg';
import imgt3 from '../../../images/Gallery/Troubleshoot/DSC_0272 (Medium).jpg';
import imgt4 from '../../../images/Gallery/Troubleshoot/DSC_0289 (Medium).jpg';
import imgt5 from '../../../images/Gallery/Troubleshoot/DSC_0310 (Medium).jpg';
import imgt6 from '../../../images/Gallery/Troubleshoot/DSC_0317 (Medium).jpg';
import imgt7 from '../../../images/Gallery/Troubleshoot/DSC_0403 (Medium).jpg';
import imgt8 from '../../../images/Gallery/Troubleshoot/DSC_0452 (Medium).jpg';
import imgt9 from '../../../images/Gallery/Troubleshoot/IMG-20230129-WA0101 (Medium).jpg';
import imgt10 from '../../../images/Gallery/Troubleshoot/rNeBgQUjA6sfdxwX9gH3J-FkXFTyAAhhXQBhQ2ZtEgY=_plaintext_638106514452974520 (Medium).jpg';

const images = [
  // 'https://imagizer.imageshack.com/v2/150x100q70/924/cRIuic.png',
  // 'https://imagizer.imageshack.com/v2/150x100q70/923/kdwHEW.png'
  // // Add other image URLs here
  imgt1,
  imgt2,
  imgt3,
  imgt4,
  imgt5,
  imgt6,
  imgt7,
  imgt8,
  imgt9,
  imgt10
];

const Troubleshoot = () => {
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
    <div >

      <div className='top-header'>
        <div className='content'>
          <h2>Troubleshoot</h2>
          <h2>Troubleshoot</h2>
        </div>
        {/* <div className='exordium-paragraph'>
          <p>This is the Exordium paragraph.</p>
        </div> */}
      </div>


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
  );
};

export default Troubleshoot;
