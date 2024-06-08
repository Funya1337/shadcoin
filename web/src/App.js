import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import './App.css';
import { Button, Input, Flex } from 'antd';
import fruitImage from './images/raspberry.png';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  const [score, setScore] = useState(0);

  const handleImageClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="score-display">{score}</div>
        <br/>
        <img alt="fruit" src={fruitImage} className="clickable-image" onClick={handleImageClick} />
      </div>
    </div>
  );
}

export default App;
