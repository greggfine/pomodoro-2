import React, { Component } from 'react';
import './App.css';
import CountdownClock from './components/CountdownClock';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Pomodoro Clock</h1> 
        <CountdownClock />
        <audio src="./old-fashioned-door-bell-daniel_simon.mp3" autoPlay controls></audio>

      </div>
    );
  }
}

export default App;
