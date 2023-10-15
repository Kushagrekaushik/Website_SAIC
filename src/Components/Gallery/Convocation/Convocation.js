import React, { useState } from 'react';
import './Convocation.css';
import imgc1 from '../../../images/Gallery/Convocation/img1.jpg';
import imgc2 from '../../../images/Gallery/Convocation/img2.png';
import imgc3 from '../../../images/Gallery/Convocation/img3.png';
import imgc4 from '../../../images/Gallery/Convocation/img4.png';
import imgc5 from '../../../images/Gallery/Convocation/img5.jpg';
import imgc6 from '../../../images/Gallery/Convocation/img6.jpg';
import imgc7 from '../../../images/Gallery/Convocation/img7.jpg';
import imgc8 from '../../../images/Gallery/Convocation/img8.jpg';   
import imgc9 from '../../../images/Gallery/Convocation/img9.jpg';
import imgc10 from '../../../images/Gallery/Convocation/img10.png';


const images = [
  // 'https://imagizer.imageshack.com/v2/150x100q70/924/cRIuic.png',
  // 'https://imagizer.imageshack.com/v2/150x100q70/923/kdwHEW.png'
  // // Add other image URLs here
  imgc1,
  imgc2,
  imgc3,
  imgc4,
  imgc5,
  imgc6,
  imgc7,
  imgc8,
  imgc9,
  imgc10
];

const Convocation = () => {
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
          <h2>EXORDIUM</h2>
          <h2>EXORDIUM</h2>
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

export default Convocation;
