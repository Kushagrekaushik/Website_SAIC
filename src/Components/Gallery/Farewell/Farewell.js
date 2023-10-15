import React, { useState } from 'react';
import './Farewell.css';
import img1 from '../../../images/Gallery/Farewell/01.jpg';
import img2 from '../../../images/Gallery/Farewell/02.jpg';
import img3 from '../../../images/Gallery/Farewell/03.jpg';
import img4 from '../../../images/Gallery/Farewell/04.jpg';
import img5 from '../../../images/Gallery/Farewell/05.jpg';
import img6 from '../../../images/Gallery/Farewell/06.jpg';
import img7 from '../../../images/Gallery/Farewell/07.jpg';
import img8 from '../../../images/Gallery/Farewell/08.jpg';
import img9 from '../../../images/Gallery/Farewell/09.jpg';
import img10 from '../../../images/Gallery/Farewell/10.jpg';
import bg from '../../../images/bg.png';
import bg1 from '../../../images/bg1.png';
import back from '../../../images/team.png';

const images = [
  // 'https://imagizer.imageshack.com/v2/150x100q70/924/cRIuic.png',
  // 'https://imagizer.imageshack.com/v2/150x100q70/923/kdwHEW.png'
  // // Add other image URLs here
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

const Farewell = () => {
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

      <div className='top-header' 
      // style={{ backgroundImage: `url(${back})`,height:`200px`}}

      >
        <div className='content' >
          <h2>Farewell</h2>
          <h2>Farewell</h2>
        </div >
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

export default Farewell;
