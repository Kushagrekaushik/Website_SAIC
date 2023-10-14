import React from 'react';

const AlmaConnect = () => (
  <section style={{ paddingBottom: '180px' }} className="about-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-img">
            <a href="https://thapar.almaconnect.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../images/AlmaConnet/Alma.jpg')} alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-caption">
            <div className="section-tittle section-tittle3 mb-35">
              <span>LATEST UPDATES</span>
              <h2>ALMA CONNECT</h2>
            </div>
            <p className="pera-top">Thapar Institute of Engineering and Technology has paved the way for young minds to succeed in life over the last 65 years and built an indelible legacy. With over 30,000 alumni all across the globe, we would like to bridge the boundaries and help our alumni connect with AlmaConnect.</p>
            <p className="pera-top">AlmaConnect is an alumni networking platform that helps strengthen relations by establishing a network for placements, branding, fundraising and much more.</p>
            <p className="mb-30 pera-bottom">AlmaConnect will take interactions to the next level, while powering over 5000 alumni communities and 1,000,000 users.</p>
            <p className="mb-30 pera-bottom">Join now at- <u><a className="mb-30 pera-bottom" href="https://thapar.almaconnect.com" target="_blank" rel="noopener noreferrer">https://thapar.almaconnect.com</a></u></p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AlmaConnect;