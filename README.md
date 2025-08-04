# 🖥️ Terminal Portfolio

A modern, interactive terminal-style portfolio website built with React and Node.js. Features a realistic terminal interface with Spotify integration and GitHub widgets.

![Terminal Portfolio](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.0.0-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18.0-black?style=for-the-badge&logo=express)

## ✨ Features

- **🎯 Interactive Terminal Interface**: Realistic terminal experience with command history and auto-scroll
- **🎵 Spotify Integration**: Live display of currently playing music with album art
- **📊 GitHub Widget**: Real-time display of your latest repositories
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **🎨 Modern UI**: Clean, dark theme with smooth animations
- **⚡ Real-time Updates**: Auto-refreshing Spotify and GitHub data

## 🚀 Live Demo

Visit the live portfolio: https://altgirl.wtf

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **CSS3** - Custom styling with CSS Grid and Flexbox
- **JavaScript ES6+** - Modern JavaScript features

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Axios** - HTTP client for API calls
- **Spotify Web API** - Music integration

### APIs
- **Spotify Web API** - Real-time music data
- **GitHub API** - Repository information

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Spotify Developer Account
- GitHub Account

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mixerxd/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
   PORT=3001
   ```

4. **Start the development servers**
   ```bash
   # Start backend server (from backend directory)
   npm start
   
   # Start frontend server (from frontend directory)
   npm start
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001

## 🎮 Usage

### Terminal Commands
- `help` - Show available commands
- `about` - Display personal information
- `social` - Show social media links
- `clear` - Clear terminal history

### Features
- **Auto-scroll**: Terminal automatically scrolls to show latest output
- **Command History**: All commands are saved and displayed
- **Real-time Updates**: Spotify and GitHub data updates automatically

## 🔧 Configuration

### Spotify Setup
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new application
3. Get your Client ID and Client Secret
4. Generate a refresh token using the Spotify API

### GitHub Setup
1. Update the GitHub username in `frontend/src/components/GitHubWidget.jsx`
2. The widget will automatically fetch your latest repositories

## 📁 Project Structure

```
portfolio/
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/        # CSS files
│   │   └── App.jsx        # Main app component
│   └── package.json       # Frontend dependencies
└── README.md
```

## 🎨 Customization

### Colors and Theme
Edit `frontend/src/styles/terminal.css` to customize:
- Color scheme
- Typography
- Animations
- Layout

### Content
- **About Me**: Edit `frontend/src/AboutMe.jsx`
- **Social Links**: Edit `frontend/src/SocialLinks.jsx`
- **GitHub Widget**: Edit `frontend/src/components/GitHubWidget.jsx`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service

### Backend (Railway/Heroku)
1. Set environment variables
2. Deploy the `backend` folder
3. Update frontend API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mixer** - [GitHub](https://github.com/mixerxd) - [Twitter](https://twitter.com/mixercs)

## 🙏 Acknowledgments

- Spotify Web API for music integration
- GitHub API for repository data
- React community for amazing tools and libraries

---

⭐ **Star this repository if you found it helpful!** 
