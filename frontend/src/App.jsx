import React from 'react';
import './styles/terminal.css';
import Terminal from './Terminal';
import CurrentSong from './CurrentSong';
import GitHubWidget from './components/GitHubWidget';

function App() {
  return (
    <div className="app-container">
      <div className="left-panel">
        <CurrentSong />
        <GitHubWidget />
      </div>
      <Terminal />
    </div>
  );
}

export default App;