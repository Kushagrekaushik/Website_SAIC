import React from 'react';
import './Achievements.css';
import img1a from "../images/AlumniAchievements/img1.jpg"
import img2a from "../images/AlumniAchievements/img2.jpg"
import img3a from "../images/AlumniAchievements/img3.jpg"
import img4a from "../images/AlumniAchievements/img4.jpg"
import img5a from "../images/AlumniAchievements/img5.jpg"
import img6a from "../images/AlumniAchievements/img6.jpg"
const AchievementsCard = ({ imageSrc,title, description }) => (
  <li className="achievement_cards_item">
    <div className="achievement_card">
      <div className="achievement_card_image">
        <img src={imageSrc} alt={title} />
       
        
      </div>
      <div className="achievement_card_content">
        <h2 className="achievement_card_title">{title}</h2>
        <div className="achievement_card_text">
          <p>{description}</p>
        </div>
      </div>
    </div>
  </li>
);

const Achievements = () => (
  <div>
  <div className='Alumni_Achievement_page'>
  <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>
  <div id='title'></div>
    <h1 className='Alumnipage_heading'>Alumni Achievements</h1>
    <p className='Alumnipage_desc'>Thapar University alumni have excelled in various sectors, from top CEOs in multinational corporations like Honeywell to key roles in government administration. Their contributions in business and government, fueled by quality education, have left an indelible mark. These achievements stand as a testament to the university's commitment to holistic development and inspire current and future students to reach for greatness.</p>
  </div>
<div className='Achievment_whitebg'>
  <div className="cards_main">
    <ul className="achievement_cards">
      <AchievementsCard
        imageSrc= {img1a} 
        title="Arvind Bansal"
        description={(
          <div>
            Head of Delivery - Global Operations at Bank of America<br />
            Mentor (Cherie Blair Foundation for Women)<br />
            Mentor IIML-MGNF<br />
            Studied at IIM, Lucknow. Went to Harvard Business School<br />
            Work - Whirlpool (2001-2004)
          </div>
          )}
        />
        

      <AchievementsCard
        imageSrc={img2a}
      
        title="Mayank Aggarwal"
        description={(
          <div>
            CEO at Compamedic<br />
            Founder and Promotor; Responsible for over-all function of the company, managing a pan India team.<br />
            Having good knowledge on Electronics, Embedded Systems, and Software programming.<br />
            Had technical training in the USA by Mortara Instrument Inc. for the entire range of Diagnostic ECG products and Telemetry Patient Monitoring.<br />
            Work Experience - Cisco, INSTROMEDIX (INDIA) PRIVATE LIMITED, Compamedic Instruments Pvt. Ltd.
          </div>
        )}
      />

      <AchievementsCard
        imageSrc={img3a}
     
        title="Anupam Sharma"
        description={(
          <div>
            Director & Founder - Dakshesh Tech Pvt Ltd.<br />
            Founder and Director, Dakshesh Technologies Private Limited.<br />
            Industry professional with 24 years of experience in developing and managing large groups developing vehicle software and hardware for automotive embedded systems.<br />
            Deep technical expertise in both software design and hardware design (holder of patent US16441269; Applied pat app# 202021035879).
          </div>
        )}
        />
      <AchievementsCard
        imageSrc={img4a}
     
        title="Tarun Jain "
        description={(
          <div>
            Technical Professional-Process, Design & Engineering, Ex-SRF , Ex-Jubilant ASQ Trained Black Belt Professional<br />
            Work Experience - Jubilant Ingrevia Limited , SRF limited , KBR Inc.
          </div>
        )}
        />
      <AchievementsCard
        imageSrc={img5a}
     
        title="Manish Gulati "
        description="An entrepreneur with a strong technology background. Founded ChicMic in 2012 which is now being acknowledged as one of the fastest growing game & application development companies in India. With humble beginnings & big dreams this entrepreneurial journey was started with just a couple of members in the team. With a current team of 180+ employees, we have successfully developed hundreds of high-quality games and world-class apps for our global clients."
        />
      <AchievementsCard
        imageSrc={img6a}
     
        title="Rahul Gupta"
        description={(
          <div>
            Technical Professional-Process, Design & Engineering, Ex-SRF , Ex-Jubilant ASQ Trained Black Belt Professional<br />
            Work Experience - Jubilant Ingrevia Limited , SRF limited , KBR Inc.
          </div>
        )}
        />
    </ul>
  </div>

</div>
        </div>
);

export default Achievements;
