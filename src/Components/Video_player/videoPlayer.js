import React from 'react';
import './videoPlayer.css'
const Video = () => {
  return (
    <div className="banner">
    
        
    <video autoPlay muted loop >
            <source src={require('./video.mp4')} type="video/mp4"  />
            Your browser does not support the video tag.
        </video>
      </div>
  );
};

export default Video;