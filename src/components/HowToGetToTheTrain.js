import React from 'react';
import '../App.css';
import { Player } from 'video-react';
import {Link} from "react-router-dom";

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
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
        </div>
    </div>    
    )
}

export default HowToGetToTheTrain

