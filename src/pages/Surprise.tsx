import { useEffect, useState } from 'react';
import './Surprise.css';

const Surprise = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');
  const message = "I promise to love you more with each passing day, to cherish every moment we share, and to always be there for you. You are my everything, and I can't wait to create more beautiful memories together. ♥";

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1000);

    let i = 0;
    const typeWriter = () => {
      if (i < message.length) {
        setTypedText(prev => prev + message.charAt(i));
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    if (showContent) {
      setTimeout(typeWriter, 1000);
    }
  }, [showContent]);

  return (
    <div className="surprise">
      <div className={`surprise-content ${showContent ? 'visible' : ''}`}>
        <div className="floating-hearts-container">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="floating-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            >
              ♥
            </div>
          ))}
        </div>
        <h1 className="surprise-title">My Promise to You</h1>
        <div className="message-container">
          <p className="typed-message">{typedText}</p>
        </div>
        <div className="surprise-footer">
          <div className="music-player">
            <a
              href="https://open.spotify.com/track/0oSc7X1uRQGuEqNRtXEeQL"
              target="_blank"
              rel="noopener noreferrer"
              className="playlist-link"
            >
              Listen to Our Playlist ♫
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surprise; 