import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      imageUrl: 'https://images5.alphacoders.com/343/thumb-1920-343645.jpg',
      heading: 'Heading 1',
    },
    {
      imageUrl: 'https://wallpapercave.com/wp/wp2634222.jpg',
      heading: 'Heading 2',
    },
    {
      imageUrl: 'https://wallpaperaccess.com/full/1154341.jpg',
      heading: 'Heading 3',
    },
    
  ];

  function prevSlide(n) {
    setIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  }

  function nextSlide(n) {
    setIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  }

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide(1);
    }, 2000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [index]);

  function changeSlide() {
    const slideElements = document.querySelectorAll('.image-slide');
    const dotElements = document.querySelectorAll('.image-controls-dot');

    for (let i = 0; i < slideElements.length; i++) {
      slideElements[i].style.display = 'none';
      dotElements[i].classList.remove('active');
    }

    slideElements[index].style.display = 'block';
    dotElements[index].classList.add('active');
  }

  return (
    <div id="image-slider">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="image-slide"
          style={{ display: idx === index ? 'block' : 'none' }}
        >
          <img src={slide.imageUrl} alt={`Slide ${idx + 1}`} />
          <h2 className='heading-image-slider'>{slide.heading}</h2>
        </div>
      ))}

      {/* Controlling arrows */}
      <span className="image-controls" onClick={() => prevSlide(-1)} id="left-arrow">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </span>
      <span className="image-controls" id="right-arrow" onClick={() => nextSlide(1)}>
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </span>

      <div id="dots-con">
        {slides.map((slide, idx) => (
          <span
            key={idx}
            className={`image-controls-dot ${idx === index ? 'active' : ''}`}
            onClick={() => setIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
