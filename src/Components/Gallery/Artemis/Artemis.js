import React, { useState } from 'react';
import './Artemis.css';
import imga1 from '../../../images/Gallery/Artemis/img1.tif';
import imga2 from '../../../images/Gallery/Artemis/img2.tif';
import imga3 from '../../../images/Gallery/Artemis/img3.tif';
import imga4 from '../../../images/Gallery/Artemis/img4.tif';
import imga5 from '../../../images/Gallery/Artemis/img5.tif';
import imga6 from '../../../images/Gallery/Artemis/img6.tif';
import imga7 from '../../../images/Gallery/Artemis/img7.tif';
import imga8 from '../../../images/Gallery/Artemis/img8.tif';
import imga9 from '../../../images/Gallery/Artemis/img9.tif';
import imga10 from '../../../images/Gallery/Artemis/img10.tif';
// import imga10 from '../../../images/Gallery/Artemis/img10';


const images = [
  // 'https://imagizer.imageshack.com/v2/150x100q70/924/cRIuic.png',
  // 'https://imagizer.imageshack.com/v2/150x100q70/923/kdwHEW.png'
  // // Add other image URLs here
  imga1,
  imga2,
  imga3,
  imga4,
  imga5,
  imga6,
  imga7,
  imga8,
  imga9,
  imga10
];

const Artemis = () => {
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
          <h2>ARTEMIS</h2>
          <h2>ARTEMIS</h2>
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

export default Artemis;
