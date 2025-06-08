import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const text = "Every love story is beautiful, but ours is my favorite.";
    const quoteElement = quoteRef.current;
    
    if (quoteElement) {
      quoteElement.textContent = '';
      let i = 0;
      
      const typeWriter = () => {
        if (i < text.length && quoteElement) {
          quoteElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 1000);
    }
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title slide-up">Our Story Begins</h1>
          <p ref={quoteRef} className="hero-quote"></p>
          <div className="hero-buttons fade-in">
            <Link to="/journey" className="hero-button primary">
              Our Journey
            </Link>
            <Link to="/letters" className="hero-button secondary">
              Love Letters
            </Link>
          </div>
        </div>
        <div className="hero-image-container fade-in">
          <img src="/images/couple-photo.jpeg" alt="Our Favorite Memory" className="hero-image" />
          <div className="floating-hearts">
            {[...Array(5)].map((_, index) => (
              <div key={index} className={`floating-heart heart-${index + 1}`}>♥</div>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="quick-link-container">
          <Link to="/gallery" className="quick-link">
            <div className="quick-link-content">
              <h3>Our Gallery</h3>
              <p>Precious moments frozen in time</p>
            </div>
          </Link>
          <Link to="/journey" className="quick-link">
            <div className="quick-link-content">
              <h3>Our Timeline</h3>
              <p>The story of us, one moment at a time</p>
            </div>
          </Link>
          <Link to="/letters" className="quick-link">
            <div className="quick-link-content">
              <h3>Love Letters</h3>
              <p>Words from the heart</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 