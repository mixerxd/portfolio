import React, { useState } from 'react';

const CommandLine = ({ onCommand }) => {
  const [command, setCommand] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    command.trim() && onCommand(command);
    setCommand('');
  };

  return (
    <form onSubmit={handleSubmit} className="command-line">
      <span className="prompt">$</span>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        autoFocus
        className="command-input"
        aria-label="Terminal command input"
      />
    </form>
  );
};

export default CommandLine;