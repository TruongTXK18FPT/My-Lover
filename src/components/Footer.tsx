import { Link } from 'react-router-dom';
import { FaHeart, FaMusic } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Made with <FaHeart className="heart-icon" /> for My Love
        </p>
        <div className="footer-links">
          <a
            href="https://open.spotify.com/playlist/YOUR_PLAYLIST_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaMusic className="music-icon" /> Our Playlist
          </a>
          <Link to="/surprise" className="surprise-link">
            <span className="hidden-text">Click for a surprise</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 