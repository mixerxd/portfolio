import React, { useState, useEffect } from 'react';

const CurrentSong = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCurrentTrack = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:3001/api/currently-playing');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.track) {
        setCurrentTrack(data.track);
        setIsPlaying(data.isPlaying);
      } else {
        setCurrentTrack(null);
        setIsPlaying(false);
      }
    } catch (err) {
      console.error('Error fetching current track:', err);
      setError('Failed to load current track');
      setCurrentTrack(null);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentTrack();
    
    const interval = setInterval(() => {
      if (!document.hidden) {
        fetchCurrentTrack();
      }
    }, 3000);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchCurrentTrack();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const formatTime = (ms) => {
    if (!ms) return '0:00';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatProgress = (progress, duration) => {
    if (!progress || !duration) return 0;
    return (progress / duration) * 100;
  };

  if (isLoading) {
    return (
      <div className="spotify-player">
        <div className="widget-header">
          <div className="widget-title">Spotify Player</div>
          <div className="widget-buttons">
            <span className="widget-button close"></span>
            <span className="widget-button minimize"></span>
            <span className="widget-button maximize"></span>
          </div>
        </div>
        <div className="player-container">
          <div className="track-info">
            <div className="album-art-placeholder">
              <img 
                src="https://media1.tenor.com/m/A61nIWCPRlYAAAAd/peach-cat-sleeping.gif"
                alt="Loading..."
                className="album-art"
              />
            </div>
            <div className="track-details">
              <div className="track-title">Loading...</div>
              <div className="artist-name">Please wait</div>
              <div className="album-name">Connecting to Spotify</div>
            </div>
          </div>
          <div className="player-controls">
            <button className="control-button" disabled>
              ⏮
            </button>
            <button className="control-button play-pause" disabled>
              ⏸
            </button>
            <button className="control-button" disabled>
              ⏭
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="spotify-player">
        <div className="widget-header">
          <div className="widget-title">Spotify Player</div>
          <div className="widget-buttons">
            <span className="widget-button close"></span>
            <span className="widget-button minimize"></span>
            <span className="widget-button maximize"></span>
          </div>
        </div>
        <div className="player-container">
          <div className="track-info">
            <div className="album-art-placeholder">
              <img 
                src="https://media1.tenor.com/m/A61nIWCPRlYAAAAd/peach-cat-sleeping.gif"
                alt="Error"
                className="album-art"
              />
            </div>
            <div className="track-details">
              <div className="track-title">Connection Error</div>
              <div className="artist-name">Unable to connect</div>
              <div className="album-name">Check your connection</div>
            </div>
          </div>
          <div className="player-controls">
            <button className="control-button" disabled>
              ⏮
            </button>
            <button className="control-button play-pause" disabled>
              ⏸
            </button>
            <button className="control-button" disabled>
              ⏭
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentTrack) {
    return (
      <div className="spotify-player">
        <div className="widget-header">
          <div className="widget-title">Spotify Player</div>
          <div className="widget-buttons">
            <span className="widget-button close"></span>
            <span className="widget-button minimize"></span>
            <span className="widget-button maximize"></span>
          </div>
        </div>
        <div className="player-container">
          <div className="track-info">
            <div className="album-art-placeholder">
              <img 
                src="https://media1.tenor.com/m/A61nIWCPRlYAAAAd/peach-cat-sleeping.gif"
                alt="Not Playing"
                className="album-art"
              />
            </div>
            <div className="track-details">
              <div className="track-title">Not Playing</div>
              <div className="artist-name">No track currently playing</div>
              <div className="album-name">Start playing something on Spotify</div>
            </div>
          </div>
          <div className="player-controls">
            <button className="control-button" disabled>
              ⏮
            </button>
            <button className="control-button play-pause" disabled>
              ⏸
            </button>
            <button className="control-button" disabled>
              ⏭
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="spotify-player">
      <div className="widget-header">
        <div className="widget-title">Spotify Player</div>
        <div className="widget-buttons">
          <span className="widget-button close"></span>
          <span className="widget-button minimize"></span>
          <span className="widget-button maximize"></span>
        </div>
      </div>
      <div className="player-container">
        <div className="track-info">
          <img 
            src={currentTrack.albumArt} 
            alt={`${currentTrack.name} album art`}
            className="album-art"
          />
          <div className="track-details">
            <div className="track-title">{currentTrack.name}</div>
            <div className="artist-name">{currentTrack.artist}</div>
            <div className="album-name">{currentTrack.album}</div>
          </div>
        </div>
        <div className="player-controls">
          <button className="control-button">
            ⏮
          </button>
          <button className="control-button play-pause">
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="control-button">
            ⏭
          </button>
        </div>
        {currentTrack.progress && currentTrack.duration && (
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${formatProgress(currentTrack.progress, currentTrack.duration)}%` }}
              ></div>
            </div>
            <div className="time-display">
              <span>{formatTime(currentTrack.progress)}</span>
              <span>{formatTime(currentTrack.duration)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentSong;