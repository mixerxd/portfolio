const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

let accessToken = null;
let tokenExpiry = 0;

async function refreshAccessToken() {
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
      {
        headers: {
          'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + (response.data.expires_in * 1000);
    
    return accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
}

async function getAccessToken() {
  if (!accessToken || Date.now() >= tokenExpiry) {
    await refreshAccessToken();
  }
  return accessToken;
}

app.get('/api/currently-playing', async (req, res) => {
  try {
    const token = await getAccessToken();
    
    const response = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    if (response.data && response.data.item) {
      const track = response.data.item;
      res.json({
        isPlaying: response.data.is_playing,
        track: {
          name: track.name,
          artist: track.artists.map(artist => artist.name).join(', '),
          album: track.album.name,
          albumArt: track.album.images[0]?.url,
          duration: track.duration_ms,
          progress: response.data.progress_ms,
        },
      });
    } else {
      res.json({ isPlaying: false, track: null });
    }
  } catch (error) {
    console.error('Error fetching currently playing:', error);
    res.status(500).json({ error: 'Failed to fetch currently playing track' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
