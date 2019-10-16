import React from 'react';
import './App.css';
import englishButton from './images/english-button.png'
import spanishButton from './images/spanish.png'
import chineseButton from './images/chinese.png'
import russianButton from './images/russian.png'


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="selectLanguage">
            <h1>Please select your language</h1>
        </div>
        <div className="buttonEnglish">
            <img className="buttons" src ={englishButton} alt={"englishButton"}/>
        </div>
        <div className="buttonEnglish">
            <img className="buttons" src ={chineseButton} alt={"chineseButton"}/>
        </div>
        <div className="buttonEnglish">
            <img className="buttons" src ={spanishButton} alt={"spanishButton"}/>
        </div>
        <div className="buttonEnglish">
            <a href="https://medium.com/@goldrix96"><img className="buttons" src ={russianButton} alt={"russianButton"}/></a>
            
        </div>

      </div>
    </div>
  );
}

export default App;
