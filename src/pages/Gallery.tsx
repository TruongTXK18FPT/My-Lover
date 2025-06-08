import { useState } from 'react';
import './Gallery.css';

interface Photo {
  id: number;
  src: string;
  alt: string;
  date: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/images/lover.jpeg",
    alt: "Sunflower Garden",
    date: "A magical evening"
  },
  {
    id: 2,
    src: "/images/mylover.jpeg",
    alt: "My Lover",
    date: "My Lover"
  },
  {
    id: 3,
    src: "/images/meandmylover.jpeg",
    alt: "Photo Booth Fun",
    date: "Silly moments"
  },
  {
    id: 4,
    src: "/images/mywife.jpeg",
    alt: "Birthday Celebration",
    date: "Happy moments"
  }
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery">
      <h1 className="gallery-title">Our Precious Moments</h1>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="gallery-item"
            onClick={() => openLightbox(photo)}
          >
            <div className="gallery-image-container">
              <img src={photo.src} alt={photo.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-date">{photo.date}</span>
                <div className="gallery-heart">♥</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3>{selectedPhoto.alt}</h3>
              <p>{selectedPhoto.date}</p>
            </div>
          </div>
        </div>
      )}

      <div className="gallery-footer">
        <p className="gallery-quote">
          "Every picture tells our story, every moment holds our love."
        </p>
      </div>
    </div>
  );
};

export default Gallery; 