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
    <h1 className='Alumnipage_heading'>Alumni Achievements</h1>
    <p className='Alumnipage_desc'>Thapar University alumni have excelled in various sectors, from top CEOs in multinational corporations like Honeywell to key roles in government administration. Their contributions in business and government, fueled by quality education, have left an indelible mark. These achievements stand as a testament to the university's commitment to holistic development and inspire current and future students to reach for greatness.</p>
  </div>
  <div className="cards_main">
    <ul className="achievement_cards">
      <AchievementsCard
        imageSrc= {img1a} 
        title="Arvind Bansal"
        description="Head of Delivery - Global Operations at Bank of America, Mentor (Cherie Blair Foundation for Women)
        Mentor IIML-MGNF
        Studied at IIM,Lucknow . Went to Harvard Business School
        Work - Whirlpool(2001-2004) 
        "
        />

      <AchievementsCard
        imageSrc={img2a}
      
        title="Ultimate Reuben"
        description="All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches..."
      />

      <AchievementsCard
        imageSrc={img3a}
     
        title="Fig & Berry Plate"
        description="A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert. Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce..."
        />
      <AchievementsCard
        imageSrc={img4a}
     
        title="Fig & Berry Plate"
        description="A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert. Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce..."
        />
      <AchievementsCard
        imageSrc={img5a}
     
        title="Fig & Berry Plate"
        description="A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert. Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce..."
        />
      <AchievementsCard
        imageSrc={img6a}
     
        title="Fig & Berry Plate"
        description="A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert. Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce..."
        />
    </ul>
  </div>
        </div>
);

export default Achievements;
