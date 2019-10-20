import React from 'react';
import '../App.css';
import { Player } from 'video-react';
import {Link} from "react-router-dom";
import HowToGetToTheTrainVideo from '../video/HowToGetToTheTrain.mp4'

function HowToGetToTheTrain(){
    return(
    <div className="welcomeScreenBackground">
        <div className="skipToTransportationButton">
          <Link to="/Transportation"><p className="skipButton">Skip</p></Link> 
        </div>
        
        <iframe width="1280" height="800" src="https://www.youtube.com/embed/AoAU3sp7h0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="playerContainer">
        
        </div>
    </div>    
    )
}

export default HowToGetToTheTrain

