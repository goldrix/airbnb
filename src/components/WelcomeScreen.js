import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

import DuringYourStayButton from '../images/during-your-stay-button.png'
import FaqButton from '../images/faq-button.png'
import TransportationButton from '../images/transportation.png'
import LocalAttractionsButton from '../images/local-attractions-button.png'
import localEatsButton from '../images/local-eats-button.png'
import localEssentialsButton from '../images/local-essentials.png'
import selectLanguageButton from '../images/select-language-button.png'



function WelcomeScreen() {
  return (
    <div className="welcomeScreenBackground">
      <div>
        <div className="welcomeItems">
          <Link to="/DuringYourStay"><img src={DuringYourStayButton} alt={"DuringYourStayButton"}></img></Link>
          <Link to="/Faq"><img src={FaqButton} alt={"FaqButton"}></img></Link>
          <Link to="/Transportation"><img src={TransportationButton} alt={"TransportationButton"}></img></Link>
          <Link to="/LocalAttractions"><img src={LocalAttractionsButton} alt={"LocalAttractionsButton"}></img></Link>
          <Link to="/localEats"><img src={localEatsButton} alt={"localEatsButton"}></img></Link>
          <Link to="/localEssentials"><img src={localEssentialsButton} alt={"localEssentialsButton"}></img></Link>
        </div>
  
        <div className="selectLanguageButton">
          <Link to="/"><img src={selectLanguageButton} alt={"selectLanguageButton"}></img></Link>
        </div>
        
        
        

      </div>
    </div>
  );
}

export default WelcomeScreen;
