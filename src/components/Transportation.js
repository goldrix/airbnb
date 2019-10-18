import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import { Player } from 'video-react';

function Transportation() {
    return (
      <div className="welcomeScreenBackground">
        <div >
          <div>
            <p className="title">Transportation</p>             
          </div>
                <Player
                // playsInline
                // poster="/assets/poster.png"
                autoPlay
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
        </div>
      </div>
    );
  }
  
  export default Transportation;