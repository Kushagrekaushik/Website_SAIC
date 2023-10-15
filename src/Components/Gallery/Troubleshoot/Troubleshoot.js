import React, { useState } from 'react';
import './Troubleshoot.css';
import imgt1 from '../../../images/Gallery/Troubleshoot/img1.tif';
import imgt2 from '../../../images/Gallery/Troubleshoot/img2.tif';
import imgt3 from '../../../images/Gallery/Troubleshoot/img3.tif';
import imgt4 from '../../../images/Gallery/Troubleshoot/img4.tif';
import imgt5 from '../../../images/Gallery/Troubleshoot/img5.tif';
import imgt6 from '../../../images/Gallery/Troubleshoot/img6.tif';
import imgt7 from '../../../images/Gallery/Troubleshoot/img7.tif';
import imgt8 from '../../../images/Gallery/Troubleshoot/img8.tif';
import imgt9 from '../../../images/Gallery/Troubleshoot/img9.tif';
import imgt10 from '../../../images/Gallery/Troubleshoot/img10.tif';

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
