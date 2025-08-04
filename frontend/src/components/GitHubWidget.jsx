import React, { useState, useEffect } from 'react';
import '../styles/terminal.css';

const GitHubWidget = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = 'mixerxd';

  useEffect(() => {


    const cachedRepos = localStorage.getItem('githubRepos');
    if (cachedRepos) {
      setRepos(JSON.parse(cachedRepos));
      setLoading(false);
    }


    const fetchRepos = async () => {
        const rateLimitResponse = await fetch('https://api.github.com/rate_limit');
        const rateLimitData = await rateLimitResponse.json();
        console.log('GitHub API rate limit:', rateLimitData.rate);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
        );
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        setRepos(data);
        localStorage.setItem('githubRepos', JSON.stringify(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) {
    return <div className="github-widget">Loading GitHub data...</div>;
  }

  if (error) {
    return <div className="github-widget">Error: {error}</div>;
  }

  return (
    <div className="github-widget">
      <div className="widget-header">
        <div className="widget-buttons">
          <div className="widget-button close"></div>
          <div className="widget-button minimize"></div>
          <div className="widget-button maximize"></div>
        </div>
        <span>GitHub Activity</span>
      </div>
      
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id} className="repo-item">
            <a 
              href={repo.html_url} 
              className="repo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
            <p>{repo.description || 'No description provided'}</p>
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>📌 {repo.forks_count}</span>
              <span>🔄 {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubWidget;