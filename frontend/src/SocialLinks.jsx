import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiFaceit } from 'react-icons/si'

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="links">
        <a href="https://github.com/mixerxd" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub className="social-icon" />
          <span>GitHub</span>
          <span className="social-handle">@mixerxd</span>
        </a>
        <a href="https://twitter.com/mixercs" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaTwitter className="social-icon" />
          <span>Twitter</span>
          <span className="social-handle">@mixercs</span>
        </a>
        <a href="https://instagram.com/111mixer" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram className="social-icon" />
          <span>Instagram</span>
          <span className="social-handle">@111mixer</span>
        </a>
        <a href="https://faceit.com/en/players/m1s3r4ble" target="_blank" rel="noopener noreferrer" className="social-link">
          <SiFaceit className="social-icon" />
          <span>FaceIT</span>
          <span className="social-handle">@m1s3r4ble</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;