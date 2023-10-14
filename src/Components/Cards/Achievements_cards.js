import React from "react";
import './Achievements_cards.css';

const AchievementsCards=({ heading, paragraph,imageUrl  })=>{
  return(

<div class="Achievements_cards_body">
 
  <div class="Achievements_cards_wrapper" >
    <div class="Achievements_cards_header ">{heading}</div>
    <div class="Achievements_cards_content ">{paragraph}</div>
    <div class="Achievements_cards_image" style={{ backgroundImage: `url(${imageUrl})` }}></div>

  </div>
  
</div>


    );
}
export default  AchievementsCards ;