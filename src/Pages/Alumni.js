import React, { useState, useRef,useEffect } from 'react';
import './Alumni.css'; 
import { useNavigate } from 'react-router-dom';


const Card = ({ dataImage, children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    setWidth(card.offsetWidth);
    setHeight(card.offsetHeight);
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    setMouseX(e.pageX - card.offsetLeft - width / 2);
    setMouseY(e.pageY - card.offsetTop - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000));
  };

  const cardStyle = {
    transform: `perspective(800px) rotateY(${mouseX / width * 30}deg) rotateX(${mouseY / height * -30}deg) translateZ(40px)`
  };

  const cardBgTransform = {
    transform: `translateX(${mouseX / width * -40}px) translateY(${mouseY / height * -40}px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`
  };

  return (
    <div
      className="card-wrap-alumni"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card-alumni" style={cardStyle}>
        <div className="card-bg-alumni" style={{ ...cardBgTransform, ...cardBgImage }}></div>
        <div className="card-info-alumni">
          {children}
        </div>
      </div>
    </div>
  );
};

const Alumni = () => {
  const navigate = useNavigate();
const AchievementsHandler=()=>{
  navigate('/Achievements');
}
// const MeetsHandler=()=>{
//   navigate('/meets');
// }
const RenunionHandler=()=>{
  navigate('/Reunion');
}
// const AlmaConnectHandler=()=>{
//   navigate('/AlmaConnect');
// }
const AlumniCardHandler=()=>{
  navigate('/AlumniCardsMain');
}

  return (
    <div>
      <h1 className="title-Alumni">Our Alumni</h1>
      <div className="container-card-Alumni" id="app">
        {/* Five Cards */}
        <div className='card-individual-alumni' onClick={AchievementsHandler}> 
        <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="> 
          <h1 slot="header" className='h1-Alumni'>Achievements</h1>
          <p slot="content" className='p-Alumni'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         
        </Card>
        </div>
        {/* <div className='card-individual-alumni' onClick={MeetsHandler}>
        <Card dataImage="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
          <h1 slot="header" className='h1-Alumni'>Meets</h1>
          <p slot="content" className='p-Alumni'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>
        </div> */}
        <div className='card-individual-alumni' onClick={RenunionHandler}>
        <Card dataImage="https://imagizer.imageshack.com/img924/5142/KhI9uz.jpg">
          <h1 slot="header" className='h1-Alumni'>Reunion</h1>
          <p slot="content" className='p-Alumni'>Alumni Reunion event, bringing together former Thapar alumni.</p>
        </Card>
        </div>
        {/* <div className='card-individual-alumni' onClick={AlmaConnectHandler}>
        <Card dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
          <h1 slot="header" className='h1-Alumni'>Alma Connect</h1>
          <p slot="content" className='p-Alumni'>AlmaConnect is an alumni networking platform</p>
        </Card>
        </div> */}
        <div className='card-individual-alumni' onClick={AlumniCardHandler}> 
        <Card dataImage="https://imagizer.imageshack.com/img923/1674/fIEzmD.jpg">
          <h1 slot="header" className='h1-Alumni'>Alumni Cards</h1>
          <p slot="content" className='p-Alumni'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>
        </div>
     
</div>
</div>
);
};

export default Alumni;
