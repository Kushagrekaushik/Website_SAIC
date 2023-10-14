import React from 'react';
import './Achievements.css';
const AchievementsCard = ({ imageSrc, price, title, description }) => (
  <li className="achievement_cards_item">
    <div className="achievement_card">
      <div className="achievement_card_image">
        <img src={imageSrc} alt={title} />
        <span className="achievement_card_price"><span>$</span>{price}</span>
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
  <div className='Alumni_Achievement_page'>
  <div>
    <h1 className='Alumnipage_heading'>Alumni Achievements</h1>
    <p className='Alumnipage_desc'>alumni Achievements</p>
  </div>
  <div className="cards_main">
    <ul className="achievement_cards">
      <AchievementsCard
        imageSrc="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
        price="9"
        title="Farmstand Salad"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat justo eu nisi consequat, ut vestibulum sapien cursus. Quisque quis ligula ut eros auctor convallis. Curabitur sit amet tellus id nisi finibus bibendum. Etiam auctor lorem in nisl congue volutpat. Nunc auctor lectus at velit facilisis, a venenatis lorem fringilla. Aenean vehicula, quam nec venenatis scelerisque, lectus mi ultricies ipsum, eu ultrices lectus justo in nunc. Nullam ultrices nunc ac quam viverra, nec malesuada dui volutpat. In semper neque eget erat fermentum, id dignissim eros auctor. Donec id lectus nec lectus volutpat elementum a id nisl. Sed non justo ac mi vehicula efficitur. Integer in purus aliquam, consequat libero id, dignissim felis. Etiam non ipsum in justo placerat accumsan. Nam non efficitur velit, ac suscipit tellus. Nunc eget ex sit amet dui scelerisque efficitur in vel dui.
        
        Nam aliquet velit non leo convallis, et euismod ex consectetur. Pellentesque et odio ligula. Aliquam erat volutpat. Suspendisse vel metus varius, vestibulum metus eget, auctor justo. Nullam elementum nunc sit amet enim lacinia, at volutpat odio bibendum. Nullam egestas, odio ut mattis egestas, turpis met"
        />

      <AchievementsCard
        imageSrc="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg"
        price="18"
        title="Ultimate Reuben"
        description="All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches..."
      />

      <AchievementsCard
        imageSrc="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg"
        price="16"
        title="Fig & Berry Plate"
        description="A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert. Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce..."
        />
    </ul>
  </div>
        </div>
);

export default Achievements;
