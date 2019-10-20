import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import HowToBuyMetroCard from '../images/how-to-buy-a-metro-card.png'
import HowToGetToTheTrain from '../images/how-to-get-to-the-train.png'
import selectLanguageButton from '../images/select-language-button.png'


function Transportation() {
    return (
      <div className="welcomeScreenBackground">
        <div >
          <div>
            <p className="title" >Transportation</p>
            <hr/>
            <div className="mainTextContainer">
                <p className="mainText">12 min to the train station by bus (Q23)</p>
                <p className="mainText">12 min walking distance  to the F,E,R,M train</p>
                <p className="mainTextTip">Tip: E and F trains are express, R and M - locals !</p>
                <p className="mainText">20 min driving to JFK or LaGuardia</p>
                <p className="mainText">20 min by F or E train to Time Square </p>
            </div>
            <div className="videoContainer">
              <p className="videoContainerTitle">Watch Videos</p>
              <Link to="/HowToGetToTheTrain"><img className="videoPreview" src ={HowToBuyMetroCard} alt={"HowToBuyMetroCard"}/></Link>
              <Link to="/HowToGetToTheTrain"><img className="videoPreview" src ={HowToGetToTheTrain} alt={"HowToGetToTheTrain"}/></Link>
            </div>
            <div className="selectLanguageButtonTratsportation">
              <Link to="/"><img src={selectLanguageButton} alt={"selectLanguageButton"}></img></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Transportation;