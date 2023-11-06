import React from "react";
import './Event.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../images/EventsCards/gls.png';
import img2 from '../images/EventsCards/exordium2.png';
import img3 from '../images/EventsCards/scribble.png';
import img4 from '../images/EventsCards/farewell.png';
import img5 from '../images/EventsCards/troubleshoot.png';
import img6 from '../images/EventsCards/artemis.png';
import img7 from '../images/EventsCards/convo.png';


const Event = () => {
    const navigate = useNavigate();
    const GlsHandler = () => {
        navigate('/Gls');
    }
    const ExordiumHandler = () => {
        navigate('/Exordium');
    }
    const FarewellHandler = () => {
        navigate('/Farewell');
    }
    const ScribbleHandler = () => {
        navigate('/Scribble');
    }
    const ArtemisHandler = () => {
        navigate('/Artemis');
    }
    const ConvocationHandler = () => {
        navigate('/Convocation');
    }
    const TroubleshootHandler = () => {
        navigate('/Troubleshoot');
    }



    return (

        <div className="containere">
            <div className="heading with-background"> {/* Add the 'with-background' class */}
                <h1 className="heading-text">Events</h1>
            </div>










            {/* <div class="slider-area2" align="center">
      <div class="slider-height2 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="hero-cap hero-cap2 text-center pt-70">
                <h2>Events</h2>
                <br/>
                <h3 style={{'color': 'azure'}}>
                  The Student Alumni Interaction Cell is a voluntary student body working under the
                  aegis of Thapar Institute of Engineering & Technology Alumni Association (TIETAA) &
                  Dean of Student Affairs (DoSA). The organization was setup with an intent to
                  encourage alumni interaction with the students of TIET.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}




            <div className="box-container">
                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
  {/* Your card content goes here */}
</div>

                        <div className="flip-card-back">
                            <h1>GLS</h1>
                            <p>Global Leadership Summit (GLS) is an innovation conclave bringing to you recognised pioneers from all around the world. GLS is designed to foster collaboration, networking, and the exchange of knowledge.</p>
                            <button onClick={GlsHandler} className="read-more-btn">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                       
                        <div className="flip-card-front" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}>
                        </div>
                        <div className="flip-card-back">
                            <h1>Exordium</h1>
                            <p>Exordium presents an exceptional opportunity, exclusively for freshers to engage in interactive sessions with esteemed Thapar Alumni while enjoying a delightful experience. </p>
                            <button onClick={ExordiumHandler} className="read-more-btn">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                       
                        <div className="flip-card-front" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover' }}>
                        </div>
                        <div className="flip-card-back">
                            <h1>Scribble Day</h1>
                            <p>Scribble Day for the graduating className is a lively and  interactive event designed to celebrate the creativity and individuality of the students.</p>
                            <button onClick={ScribbleHandler} className="read-more-btn">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front" style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover' }}>
                        </div>
                        <div className="flip-card-back">
                            <h1>E-Farewell</h1>
                            <p>Troubleshoot provides a simulated environment of crisis and economic contraction, which allows the participants to experience the practical work field and make spontaneous decisions in real-time.</p>
                            <button onClick={FarewellHandler} className="read-more-btn">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front" style={{ backgroundImage: `url(${img5})`, backgroundSize: 'cover' }}>
                        </div>
                        <div className="flip-card-back">
                            <h1>Troubleshoot</h1>
                            <p>Troubleshoot provides a simulated environment of crisis and economic contraction, which allows the participants to experience the practical work field and make spontaneous decisions in real-time.</p>
                            <button onClick={TroubleshootHandler} className="read-more-btn">Read More</button>
                        </div>
                    </div>
                </div>


                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front" style={{ backgroundImage: `url(${img6})`, backgroundSize: 'cover' }}>
                        </div>
                        <div className="flip-card-back">
                            <h1>Artemis</h1>
                            <p>Artemis, an electrifying event orchestrated by SAIC, presents a unique fusion of intellectual acumen and adrenaline-charged challenges. Geared towards thrill-seekers and puzzle solvers alike, this real-life treasure hunt redefines interactive entertainment. The event demands participants to harmonize their problem-solving prowess, analytical thinking, and effective communication to overcome each obstacle.</p>
                           
                            <button onClick={ArtemisHandler} className="read-more-btn">Read More</button>
                        </div>
                    </div>
                </div>


                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front" style={{ backgroundImage: `url(${img7})`, backgroundSize: 'cover' }}>
                        </div>
                        <div className="flip-card-back">
                            <h1>Convocation</h1>
                            <p>The SAIC's convocation event is a dynamic platform where students and accomplished alumni converge to foster knowledge exchange and networking. Through alumni talks, interactive sessions, and workshops, attendees gain valuable insights into diverse career paths, industry trends, and skill development. The event encourages meaningful interactions, providing a bridge between academic learning and real-world experiences.</p>
                            
                            <button onClick={ConvocationHandler} className="read-more-btn">Read More</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Event;

