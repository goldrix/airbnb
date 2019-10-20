import React from 'react';
import '../App.css';
import { Player } from 'video-react';
import {Link} from "react-router-dom";
import HowToBuyAmetroCardVideo from '../video/HowToBuyAmetroCard.mp4'

function HowToGetToTheTrain(){
    return(
    <div className="welcomeScreenBackground">
        <div className="skipToTransportationButton">
          <Link to="/Transportation"><p className="skipButton">Skip</p></Link> 
        </div>
        
        <div className="playerContainer">
        <Player
                playsInline
                // poster="/assets/poster.png"
                autoPlay            
                src={HowToBuyAmetroCardVideo}
                />
        </div>
    </div>    
    )
}

export default HowToGetToTheTrain

