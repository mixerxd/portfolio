import React, { useState, useEffect, useRef } from 'react';
import AboutMe from './AboutMe';
import SocialLinks from './SocialLinks';
import CurrentSong from './CurrentSong';
import GitHubWidget from './components/GitHubWidget';
import CommandLine from './components/CommandLine';
import './styles/terminal.css';

const Terminal = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const terminalBodyRef = useRef(null);

  const commands = {
    about: { desc: 'Show information about me', action: () => setActiveTab('about') },
    social: { desc: 'Display my social media links', action: () => setActiveTab('social') },
    clear: { desc: 'Clear the terminal', action: () => { setCommandHistory([]); setActiveTab(null); } },
    help: { 
      desc: 'Show this help message', 
      action: () => ({
        output: (
          <div className="help-output">
            <p>Available commands:</p>
            <ul>
              {Object.entries(commands).map(([cmd, { desc }]) => (
                <li key={cmd}><span className="command">{cmd}</span> - {desc}</li>
              ))}
            </ul>
          </div>
        )
      })
    }
  };

  useEffect(() => {
    handleCommand('help', true);
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [commandHistory]);

const handleCommand = (command, isInitial = false) => {
  const cmd = command.toLowerCase();
  
  if (cmd !== 'clear') {
    setActiveTab(null);
  }
  
  if (cmd === 'clear') {
    commands.clear.action();
    return;
  }

  const newHistory = isInitial ? [] : [...commandHistory, { command }];
  
  if (commands[cmd]) {
    const result = commands[cmd].action();
    if (result?.output) {
      if (isInitial) {
        setCommandHistory([{ output: result.output }]);
      } else {
        setCommandHistory([...newHistory, { output: result.output }]);
      }
    } else {
      setCommandHistory(newHistory);
    }
  } else {
    setCommandHistory([...newHistory, { 
      output: `Command not found: ${command}. Type "help" for available commands.` 
    }]);
  }
};

return (
  <div className="terminal">
    <div className="terminal-header">
      <div className="terminal-buttons">
        <span className="terminal-button close"></span>
        <span className="terminal-button minimize"></span>
        <span className="terminal-button maximize"></span>
      </div>
      <div className="terminal-title">mixer@altgirl.wtf:~</div>
    </div>
    
    <div className="terminal-body" ref={terminalBodyRef}>
      <div className="command-history">
        {commandHistory.map((item, index) => (
          <div key={index} className="command-entry">
            {item.command && <><span className="prompt">$</span> {item.command}</>}
            {item.output && <div className="command-output">{item.output}</div>}
          </div>
        ))}
      </div>
      
      <div className="tab-content">
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'social' && <SocialLinks />}
      </div>
      
      <CommandLine onCommand={handleCommand} />
    </div>
  </div>
);
}

export default Terminal;